import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
// import * as Font from 'expo-font';

export default function UserAccountPage( { navigation } ) {
//   (async () => {
//     await loadAsync({
//       Pacifico: require("../assets/fonts/Pacifico/Pacifico-Regular.ttf"),
//     });
//   })();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Account Page</Text>
      <Button
        title="Trips"
        onPress={() => navigation.navigate("Trips")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 30,
    // fontFamily: "Pacifico",
  },
});
