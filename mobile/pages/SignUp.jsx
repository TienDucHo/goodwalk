import React from "react";
import { useState } from "react";
import { Text, View, ImageBackground, Alert } from "react-native";
import Input from "../components/auth/Input";
import CustomButtom from "../components/shared/CustomButton";

import AuthContext from "../components/context/AuthContext";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const signup = async () => {
    const loginCredential = JSON.stringify({
      username: username,
      password: password,
      name: name,
    });
    await fetch(
      "https://56d2-2620-101-c040-85c-9499-41b1-ddf6-c1c7.ngrok.io/register",
      {
        method: "post",
        body: loginCredential,
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((data) => {
        Alert.alert("Account created succesfully");
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <View className="bg-white/70 rounded-3xl w-4/5 py-12 px-8">
        <Text className="font-kollektif text-4xl text-text-black">
          Sign Up
        </Text>
        <View className="flex flex-col justify-between">
          <View className="flex flex-col my-12">
            <Input
              text="Username"
              onChangeText={setUsername}
              value={username}
            ></Input>
            <Input
              text="Password"
              onChangeText={setPassword}
              value={password}
            ></Input>
            <Input
              text="Name"
              onChangeText={setName}
              value={name}
            ></Input>
          </View>
          <CustomButtom
            text="Sign Up"
            onClick={signup}
            type="primary"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
