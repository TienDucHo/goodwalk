import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import TabBarOptions from "./components/shared/TabBarOptions";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={TabBarOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
