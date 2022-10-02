import React from "react";
import { Text, View, TextInput } from "react-native";

export default function Input(props) {
  return (
    <View className="flex flex-col gap-y-3 py-2">
      <Text className="font-kollektif text-2xl">
        <Text className="text-green-primary">*</Text> {props.text}
      </Text>
      <TextInput
        className="bg-white p-4 rounded-3xl"
        onChangeText={props.onChangeText}
        value={props.value}
        autoCorrect={false}
        placeholder={props.text}
      />
    </View>
  );
}
