import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserAccountPage from "../components/UserAccountPage.js";
import TripsSearchPage from "../components/TripsSearchPage.js";
import TripCreationPage from "../components/TripCreationPage.js";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "../components/HomePage.js";

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
    <HomeStack.Screen name="Home" component={HomeStackScreen} />
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

export { RootStackScreen };
