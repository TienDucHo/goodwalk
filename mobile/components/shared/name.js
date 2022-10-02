import { Text, View } from "react-native";

export default function Name(props){
    return (
        <View className ={""}>
            <View className={"bg-black h-28 w-28 rounded-full flex items-center self-center justify-center"}>
                <Text className={" text-white text-4xl"}>{props.initials}</Text>
            </View>
            <Text className={" mt-4 text-3xl font-semibold text-center"}>{props.name}</Text>
            <Text className={"  text-lg font-ligth text-gray-500 text-center"}>Edit Profile</Text>
            <View className={"mt-10 rounded-xl h-80 bg-white/50 w-72 flex flex-col justify-center items-center space-y-5"}>
                <View className={"h-2/5 w-5/6 bg-white/90 rounded-xl flex flex-col justify-center items-center"}>
                    <Text className={" text-4xl"}>{props.steps}</Text>
                    <Text className={" text-sm text-gray-600"}>Total steps</Text>
                </View>
                <View className={"h-2/5 w-5/6 bg-white/90 rounded-xl flex flex-col justify-center items-center"}>
                    <Text className={" text-4xl"}>{props.money}</Text>
                    <Text className={" text-sm text-gray-600"}>In your wallet</Text>
                </View>
            </View>
        </View>
    )
}