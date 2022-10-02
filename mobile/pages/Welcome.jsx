import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/full_background.png")}
      ></ImageBackground>
    </SafeAreaView>
  );
};
export default Welcome;
