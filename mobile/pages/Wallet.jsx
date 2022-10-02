import React, { useEffect, useState, useContext } from "react";
import { Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Name from "../components/shared/name";
import AuthContext from "../components/context/AuthContext";

const URL =
  "https://56d2-2620-101-c040-85c-9499-41b1-ddf6-c1c7.ngrok.io";
export default function Wallet() {
  const [steps, setSteps] = useState(0);
  const [money, setMoney] = useState(0);
  const [userdata, setUserdata] = useState({ name: "" });
  const [initials, setInitials] = useState();
  const { user, _ } = useContext(AuthContext);

  useEffect(() => {
    const url = `${URL}/steps/${user.username.toLowerCase()}`;
    const getData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setSteps(json.user["stepcounter"]);
          const conversion = steps * 0.00002;
          console.log(conversion);
          setMoney(conversion);
          setUserdata(json.user);
          const i =
            json.user["name"][0] +
            json.user["name"][
              json.user["name"].length - 1
            ].toUpperCase();
          setInitials(i);
          //console.log(json.user["stepcounter"])
          //console.log(i)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  useEffect(() => {
    const url = `${URL}/steps/${user.username.toLowerCase()}`;
    const getData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setSteps(json.user["stepcounter"]);
          const conversion = steps * 0.00002;
          console.log(conversion);
          setMoney(conversion);
          setUserdata(json.user);
          const i =
            json.user["name"][0] +
            json.user["name"][
              json.user["name"].length - 1
            ].toUpperCase();
          setInitials(i);
          //console.log(json.user["stepcounter"])
          //console.log(i)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [user]);

  return (
    <ImageBackground
      source={require("../assets/fitted_background.png")}
      className="flex-1 flex-col items-center justify-center"
      blurRadius={2}
      imageStyle={{
        resizeMode: "cover",
        alignSelf: "flex-start",
      }}
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Name
        name={userdata.name}
        initials={initials}
        steps={steps}
        money={money}
      />
    </ImageBackground>
  );
}
