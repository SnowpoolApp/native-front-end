import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStackScreen } from './navigation/RootStack.js'

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      <StatusBar style="auto" />
      <TestButton name="Go to Form" />
    </NavigationContainer>
  );
};
