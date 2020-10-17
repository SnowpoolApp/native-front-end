import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage.js";
import UserAccountPage from "./components/UserAccountPage.js";
import TripsSearchPage from "./components/TripsSearchPage.js";
import TripCreationPage from "./components/TripCreationPage.js";
import TripShowPage from "./components/TripShowPage.js"
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
          component={HomePage}
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
        <Screen
          name="ShowTrip"
          component={TripShowPage}
          // options={{
          //   drawerIcon: ({ focused, size }) => <Ionicons name="md-create" />,
          // }}
        />
      </Navigator>
      <StatusBar style="auto" />
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
