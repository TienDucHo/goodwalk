import React from "react";
import { StyleSheet, View, Image } from "react-native";
import TabBarIcon from "./TabBarIcons";
import { House, Heart, Wallet } from "phosphor-react-native";
import Subtract from "../../assets/Subtract.svg";

const TabBarOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === "Home")
      return <TabBarIcon icon={<House size={32} />} />;
    if (route.name === "Charity")
      return <TabBarIcon icon={<Heart size={32} color="white" />} />;
    return <TabBarIcon icon={<Wallet size={32} color="white" />} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  tabBarStyle: styles.navigator,
  tabBarIconStyle: styles.icon,
  tabBarBackground: () => <Subtract width="100%" />,
  tabBarShowLabel: false,
});

const styles = StyleSheet.create({
  navigator: {
    position: "absolute",
    bottom: 24,
    borderRadius: 16,
    marginHorizontal: 48,
    height: 65,
    borderTopWidth: 0,
  },
  icon: {},
});

export default TabBarOptions;
