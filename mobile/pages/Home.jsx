import React, { useState, useEffect, useContext } from "react";
import { Text, View, ImageBackground } from "react-native";
import { Pedometer } from "expo-sensors";
import { SafeAreaView } from "react-native-safe-area-context";
import History from "../assets/History.svg";

import AuthContext from "../components/context/AuthContext";

export default function Home() {
  const { user, _ } = useContext(AuthContext);
  let oldData = 0;
  const [stepData, setStepData] = useState({
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const _subscribe = () => {
    setSubscription(
      Pedometer.watchStepCount((result) => {
        setStepData({
          ...stepData,
          currentStepCount: oldData + result.steps,
        });
      })
    );
    Pedometer.isAvailableAsync().then(
      (result) => {
        setStepData({
          isPedometerAvailable: String(result),
        });
      },
      (error) => {
        setStepData({
          isPedometerAvailable:
            "Could not get isPedometerAvailable: " + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        setStepData({ ...stepData, pastStepCount: result.steps });
      },
      (error) => {
        setStepData({
          ...stepData,
          pastStepCount: "Could not get stepCount: " + error,
        });
      }
    );
  };
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };
  useEffect(() => {
    const submit = async () => {
      await fetch(
        `https://aa24-2620-101-c040-85c-9499-41b1-ddf6-c1c7.ngrok.io/steps/${user.username}`,
        {
          method: "get",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          oldData = data.steps;
          setStepData({
            ...stepData,
            currentStepCount: data.steps,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    submit();
  }, []);
  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);
  useEffect(() => {
    function updateSteps() {
      let end = new Date();
      let start = new Date(end - 120000);
      const loginCredential = JSON.stringify({
        username: user.username,
        stepcounter: stepData.currentStepCount,
        start: start,
        end: end,
      });
      console.log(loginCredential);
      fetch(
        "https://aa24-2620-101-c040-85c-9499-41b1-ddf6-c1c7.ngrok.io/step/record",
        {
          method: "post",
          body: loginCredential,
        }
      )
        .then((result) => result.json())
        .then((data) => console.log(data));
    }
    updateSteps();
    const interval = setInterval(() => updateSteps(), 120000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ImageBackground
      source={require("../assets/fitted_background.png")}
      className="flex-1 flex-col items-center justify-start w-full"
    >
      <SafeAreaView className="flex mt-4 justify-between items-center w-full h-2/3">
        <View className="flex flex-row w-3/4 justify-between items-center mb-12">
          <View className="bg-black w-16 h-16 flex justify-center items-center rounded-lg">
            <Text className="text-white text-2xl font-kollektif">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <View className="bg-black flex justify-center items-center rounded-2xl p-2">
            <Text className="text-white text-xl font-kollektif">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(16753)}
            </Text>
          </View>
        </View>
        <View className="bg-white/75 w-3/4 flex-initial justify-center items-center p-12 rounded-3xl">
          <Text className="text-6xl">
            {stepData.currentStepCount}
          </Text>
          <Text className="font-sans text-grey mb-12">
            Steps Today
          </Text>
          <View className="bg-black p-4 rounded-xl">
            <History />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
