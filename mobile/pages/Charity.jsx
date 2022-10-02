import React from "react";
import { FlatList, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc"
import CharityCard from "../components/shared/charityCard";

export default function Charity() {
  return (
    <SafeAreaView style={tw` flex-1`}>
      <View className={` flex-1 flex-col ml-4 items-center font-kollektif`}>
        <View style={tw` w-28 rounded-xl mt-2 items-center self-end m-6 bg-black h-10 justify-center`}>
          <Text style={tw` text-white text-lg `}>$100</Text>
        </View>
        <Text className={` text-4xl mt-[-10px] self-start font-kollektif-bold`}>Charities</Text>
        <TextInput style={tw` w-[93%] border border-[#EEEEEE bg-gray-200 ml-[-12px] mt-3 h-9 rounded-2xl pl-4`}
          placeholder={"Search charities..."}
          inlineImageLeft={require("../assets/organism/molecule/Vector.png")}
          />
        <Text className={`self-start text-xl mt-5 font-kollektif font-bold`}>Featured</Text>
        <CharityCard item={{
          text:"Doctors Without Borders",
          source:require("../assets/doctor.png")
        }}/>
        <Text className={`self-start text-xl mt-5 font-kollektif font-bold`}>
          Charities of the Week
        </Text>
        <FlatList
          horizontal
          data={section.data}
          renderItem={({ item }) => <CharityCard item={item} />}
          />
      </View>
    </SafeAreaView>
  );
}

const section ={
  data:[
    {
      text:"Doctors Without Borders",
      source:require("../assets/doctorswithoutborders.png")
    },
    {
      text:"Doctors Without Borders",
      source:require("../assets/doctorswithoutborders.png")
    }
  ]
}
