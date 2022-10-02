import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import Login from "./pages/login";


export default function App() {
  return (
    <SafeAreaView className="">
      
      <StatusBar style="auto" />
      <Login/>
    </SafeAreaView>
  );
}
