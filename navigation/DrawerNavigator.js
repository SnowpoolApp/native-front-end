import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogInPage from "../components/LogInPage.js";
import UserAccountPage from "../components/UserAccountPage.js";
import TripsSearchPage from "../components/TripsSearchPage.js";
import TripCreationPage from "../components/TripCreationPage.js";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
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
  );
};

export { DrawerNavigator };
