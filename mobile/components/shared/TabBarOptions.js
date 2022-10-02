import React from "react";
import { House, Heart, Wallet } from "phosphor-react-native";

const TabBarOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === "Home") return <House size={32} />;
    if (route.name === "Charity") return <Heart size={32} />;
    return <Wallet size={32} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default TabBarOptions;
