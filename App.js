import React from "react";
import { StyleSheet, Image, View } from "react-native";
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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={LogInPage}
          options={{
            drawerIcon: ({ focused, size }) => <Ionicons name="md-snow" />,
          }}
        />
        <Drawer.Screen
          name="Account Page"
          component={UserAccountPage}
          options={{
            drawerIcon: ({ focused, size }) => <Ionicons name="md-home" />,
          }}
        />
        <Drawer.Screen
          name="Trips"
          component={TripsSearchPage}
          options={{
            drawerIcon: ({ focused, size }) => <Ionicons name="md-car" />,
          }}
        />
        <Drawer.Screen
          name="Create Trip"
          component={TripCreationPage}
          options={{
            drawerIcon: ({ focused, size }) => <Ionicons name="md-create" />,
          }}
        />
      </Drawer.Navigator>
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
