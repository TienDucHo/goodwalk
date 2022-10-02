import { Pressable, Text } from "react-native";
import React from "react";

export default function CustomButtom(props) {
  const buttonConfig = {
    // Colors
    primary: {
      bgColor: "bg-green-primary",
    },
    secondary: {
      bgColor: "bg-black",
    },
  };
  return (
    <Pressable
      className={`${
        buttonConfig[props.type].bgColor
      } flex-initial justify-center items-center w-full p-4 rounded-xl`}
      onPress={props.onClick}
    >
      <Text className="text-white text-xl font-sans">
        {props.text}
      </Text>
    </Pressable>
  );
}
