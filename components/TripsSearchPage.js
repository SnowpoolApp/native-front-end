import React from 'react'
import { Text, View, StyleSheet, Button } from "react-native";

function TripsSearchPage() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Trips</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      margin: 10,
      marginLeft: 10,
    },
    titleText: {
      fontSize: 30,
      alignSelf: "auto",
      borderWidth: 2, //borderBottomWidth not working on text component
      borderColor: "gray"
      // fontFamily: "Pacifico",
    },
  });

export default TripsSearchPage
