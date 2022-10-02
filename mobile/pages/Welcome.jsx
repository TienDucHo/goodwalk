import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtom from "../components/shared/CustomButton";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 flex-col">
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
        <View className="flex flex-col justify-center items-center mt-48 mb-64">
          <Text className="text-5xl text-text-black font-kollektif-bold ">
            GoodWalk
          </Text>
          <Text className="text-2xl text-text-black font-kollektif">
            Walk for Good
          </Text>
        </View>
        <View className="flex flex-col w-3/4 h-1/6 justify-around place-self-end justify-self-center">
          <CustomButtom
            type="secondary"
            text="Login"
            onClick={() => navigation.navigate("Login")}
          />
          <CustomButtom
            type="secondary"
            text="Sign Up"
            onClick={() => navigation.navigate("Sign Up")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Welcome;
