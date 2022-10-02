import { Pressable, Text } from "react-native";
import React from "react";

export default function CustomButtom(props) {
  return (
    <Pressable
      className={`bg-${props.color} flex-initial justify-center items-center w-full p-4 rounded-xl`}
      onPress={props.onClick}
    >
      <Text className="text-white text-xl font-sans">
        {props.text}
      </Text>
    </Pressable>
  );
}
