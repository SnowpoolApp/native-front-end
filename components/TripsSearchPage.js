import React from "react";
import DATA from "../trips-data";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Button, Divider } from "react-native-elements";

const Separator = () => <View style={styles.separator} />;

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
      <Separator />
      <SafeAreaView>
        {DATA ? (
          <FlatList
            data={DATA}
            renderItem={({ item }) => {
              return (
                <>
                  <Text key={item.id}>
                    {item.startLocation}
                    {item.endLocation}
                    {item.dateAndTime}
                  </Text>
                  <Divider style={styles.divider}/>
                </>
              );
            }}
          />
        ) : (
          <Text>There are no trips available.</Text>
        )}
      </SafeAreaView>
    </>
  );
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
    marginBottom: 10,
    // fontFamily: "Pacifico",
  },
  separator: {
    marginVertical: 8,
    marginBottom: 640,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  filter: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginRight: 12,
  },
  divider: {
    width: "80%", 
    height: 2,
    alignSelf: "center"
  }
});

export default TripsSearchPage;
