import React, { useCallback } from "react";
import { Pressable, View } from "react-native";
import { House } from "phosphor-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Charity from "./pages/Charity";
import Wallet from "./pages/Wallet";
import Welcome from "./pages/Welcome";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import TabBarOptions from "./components/shared/TabBarOptions";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Kollektif: require("./assets/Kollektif.ttf"),
    "Kollektif-Bold": require("./assets/Kollektif-Bold.ttf"),
    "Kollektif-Italic": require("./assets/Kollektif-Italic.ttf"),
    "Kollektif-BoldItalic": require("./assets/Kollektif-BoldItalic.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider className="flex-1">
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={TabBarOptions}
          initialRouteName="Home"
        >
          <Tab.Screen name="Charity" component={Charity} />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Pressable
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 24,
                    backgroundColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <House size={32} color="#b1d7b4" />
                </Pressable>
              ),
            }}
          />
          <Tab.Screen name="Wallet" component={Wallet} />
        </Tab.Navigator>
      </NavigationContainer> */}
      <Welcome />
    </SafeAreaProvider>
  );
}
