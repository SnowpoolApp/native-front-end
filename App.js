import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen, HomeStackScreen } from './navigation/RootStack.js'
import HomePage from './components/HomePage.js'
import { Root } from "native-base";

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
