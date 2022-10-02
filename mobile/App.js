import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
<<<<<<< HEAD
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200"></View>
=======
import { SafeAreaView, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import Login from "./pages/login";


export default function App() {
  return (
    <SafeAreaView className="">
      
      <StatusBar style="auto" />
      <Login/>
    </SafeAreaView>
>>>>>>> 6e696d6 (added new npm library twrnc)
  );
}
