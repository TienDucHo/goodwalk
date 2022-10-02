import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Login from "./pages/login";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Login />
    </SafeAreaView>
  );
}
