import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import Tracker from "./pages/Tracker";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Tracker></Tracker>
    </View>
  );
}
