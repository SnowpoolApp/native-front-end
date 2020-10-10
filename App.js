import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInPage from "./components/LogInPage.js";
import TestButton from "./components/TestButton.js";
import UserAccountPage from "./components/UserAccountPage.js";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={LogInPage} />
        <Screen name="Account Page" component={UserAccountPage} />
      </Navigator>
      <StatusBar style="auto" />
      <TestButton name="Go to Form" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
