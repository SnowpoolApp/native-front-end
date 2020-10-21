import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/HomePage.js";
import UserAccountPage from "../components/UserAccountPage.js";
import TripsSearchPage from "../components/TripsSearchPage.js";
import TripCreationPage from "../components/TripCreationPage.js";
import { RootStackScreen } from './RootStack.js'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Account Page" component={UserAccountPage} />
      <Stack.Screen name="Trips" component={TripsSearchPage} />
      <Stack.Screen name="Create Trip" component={TripCreationPage} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
