import { View, Text, ImageBackground, Pressable } from "react-native";

export default function CharityCard(props){
    //const s = require(`${String(props.item.source)}`)
    const pressed = () =>{
        console.log("I was pressed")
    }
    return(
        <Pressable onPress={pressed}>
            <View className={" w-[340] border h-56 rounded-xl mt-4 mr-5"}>
                <ImageBackground source={props.item.source}
                    imageStyle={{
                        resizeMode: "full",
                        alignSelf: "flex-start",
                        borderRadius:"12px"
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
                    <View className={"flex-1 flex-col-reverse"}>
                        <View className ={"bg-black h-14 justify-self-end rounded-b-xl flex"}>
                            <Text className={"text-white font-kollektif p-3 text-xl justify-self-center text-center items-center"}>{props.item.text}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    )
}