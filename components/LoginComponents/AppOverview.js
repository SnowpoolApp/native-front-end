import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";


export default function AppOverview({ navigation }) {
  return (
    <View style={styles.slide2}>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
  },
  title:{
    color: "white",
    fontSize: 38,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  header: {
    color: "white",
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  subheader: {
    marginTop: 30,
  },
  parent: {
    display: 'flex',
    alignItems: 'center',
  },
  horizontal:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5
    // fontFamily: 'Pacifico'
  },
  link: {
    color: "white",
    fontSize: 15,
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5
    // fontFamily: 'Pacifico'
  },
  demo: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 200,
  },
  slide2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});