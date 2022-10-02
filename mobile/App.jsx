import React, { useCallback, useState, useMemo } from "react";
import { Pressable, View } from "react-native";
import { House } from "phosphor-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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

import AuthContext from "./components/context/AuthContext";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  const toggleLogged = () => {
    setLogged((isLogged) => {
      return !isLogged;
    });
  };

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
      <AuthContext.Provider value={value}>
        {user != null ? (
          <NavigationContainer>
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
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
