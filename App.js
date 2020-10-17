import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage.js";
import UserAccountPage from "./components/UserAccountPage.js";
import TripsSearchPage from "./components/TripsSearchPage.js";
import TripCreationPage from "./components/TripCreationPage.js";
import TripShowPage from "./components/TripShowPage.js"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import TestButton from "./components/TestButton.js";
import HomePage from "./components/HomePage.js";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomePage} />
    <HomeStack.Screen name="Account Page" component={UserAccountPage} />
    <HomeStack.Screen name="Trips" component={TripsSearchPage} />
    <HomeStack.Screen name="Create Trip" component={TripCreationPage} />
  </HomeStack.Navigator>
);

const TripStack = createStackNavigator();
const TripStackScreen = () => (
  <TripStack.Navigator>
    <TripStack.Screen name="Trips" component={TripsSearchPage} />
  </TripStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account Page" component={UserAccountPage} />
    <HomeStack.Screen name="Home" component={HomeStackScreen} />
  </AccountStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => <Ionicons name="md-home" />,
      }}
    />
    <Drawer.Screen
      name="Account Page"
      component={AccountStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => <Ionicons name="md-snow" />,
      }}
    />
    <Drawer.Screen
      name="Trips"
      component={TripsSearchPage}
      options={{
        drawerIcon: ({ focused, size }) => <Ionicons name="md-car" />,
      }}
    />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="App"
      component={DrawerScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </RootStack.Navigator>
);

export default () => {
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
      <RootStackScreen />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
