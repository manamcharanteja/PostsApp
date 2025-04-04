import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Colors } from "../theme/colors";
import MainStack from "./MainStack";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle={"dark-content"} />
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
