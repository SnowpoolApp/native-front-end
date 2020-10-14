import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

function TripCreationPage() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>In progress...</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    display: "flex",
    margin: 10,
    marginLeft: 10,
    alignItems: "flex-start",
  },
  titleText: {
    fontSize: 40,
    alignSelf: "auto",
    marginBottom: 10,
    // fontFamily: "Pacifico",
  },
});

export default TripCreationPage;
