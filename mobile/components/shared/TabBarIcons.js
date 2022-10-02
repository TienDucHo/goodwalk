import { View } from "react-native";

const TabBarIcon = ({ icon }) => {
  return (
    <View style={{ position: "absolute", top: "50%" }}>{icon}</View>
  );
};

export default TabBarIcon;
