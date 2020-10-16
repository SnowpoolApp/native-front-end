import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInPage from "./components/LogInPage.js";
import TestButton from "./components/TestButton.js";
import UserAccountPage from "./components/UserAccountPage.js";
import TripsSearchPage from "./components/TripsSearchPage.js";
import TripCreationPage from "./components/TripCreationPage.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={LogInPage}
          // options={{
          //   drawerIcon: ({ focused, size }) => <Ionicons name="md-snow" />,
          // }}
        />
        <Screen
          name="Account Page"
          component={UserAccountPage}
          // options={{
          //   drawerIcon: ({ focused, size }) => <Ionicons name="md-home" />,
          // }}
        />
        <Screen
          name="Trips"
          component={TripsSearchPage}
          // options={{
          //   drawerIcon: ({ focused, size }) => <Ionicons name="md-car" />,
          // }}
        />
        <Screen
          name="Create Trip"
          component={TripCreationPage}
          // options={{
          //   drawerIcon: ({ focused, size }) => <Ionicons name="md-create" />,
          // }}
        />
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
