import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from './navigation/RootStack.js'

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
