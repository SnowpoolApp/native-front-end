import React from 'react'
import data from "../trips-data"
import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

const Separator = () => (
    <View style={styles.separator} />
  );

function TripsSearchPage() {
    return (
        <>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Trips</Text>
             <Button
                type="outline"
                title="Create Trip"
                //Touch will navigate to create trip page
             />
        </View>
        <Text style={styles.filter}>Filter</Text>
        <Separator/>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      display: "flex",
      margin: 20,
      marginTop: 100,
      marginLeft: 10,
      alignItems: "flex-start",
    },
    titleText: {
      fontSize: 40,
      alignSelf: "auto",
      marginBottom: 10
      // fontFamily: "Pacifico",
    },
    separator: {
        marginVertical: 8,
        marginBottom: 640,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      filter: {
          alignSelf: "flex-end",
          fontSize: 18,
          fontWeight: "bold",
          textDecorationLine: "underline",
          marginRight: 12
      }
  });

export default TripsSearchPage
