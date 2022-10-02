import { useState } from "react";
import { ListViewComponent, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import tw from 'twrnc';
export default function Login(){
    const submit =() => {
        console.log(username, password)
    }
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return(
        <View style={tw` mt-24 ml-10 flex flex-col`}>
            <Text style={tw` text-5xl`}>Login</Text>
            <View style={tw`mt-30 justify-center`} >
                <Text style={tw` text-lg mt-2`}>Username</Text>
                <TextInput
                    style={tw` w-50 border h-8 rounded-lg mt-2 pl-3`}
                    onChangeText = {setUsername}
                    value={username}
                    autoCorrect={false}
                />
                <Text style={tw` text-lg mt-2`}>Password</Text>
                <TextInput
                    style={tw` w-50 border h-8 rounded-lg mt-2 pl-3`}
                    onChangeText = {setPassword}
                    value = {password}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Pressable style={tw`mt-6 ml-1 border w-20 items-center rounded-md `} onPress={submit}>
                    <Text style={tw` text-base`}>Submit</Text>
                </Pressable>
            </View>
        </View>

    )
}