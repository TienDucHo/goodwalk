import React, { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthContext from "../components/context/AuthContext";

export default function Home() {
  const { user, _ } = useContext(AuthContext);
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
          currentStepCount: result.steps,
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
    _subscribe();
    return () => _unsubscribe();
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="bg-slate-400 border-2 rounded-full w-48 h-48 flex-initial justify-center items-center">
        <Text className="text-4xl">{stepData.currentStepCount}</Text>
        <Text className="text-4xl">{user.name}</Text>
      </View>
    </SafeAreaView>
  );
}
