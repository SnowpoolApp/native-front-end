import React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';


export default function AppOverview({ navigation }) {
  return (
    <View style={styles.slide2}>
        <View style={styles.child}>
          <Text>Share rides</Text>
          <Text>Check out upcoming trips to offer a ride or grab a ride.</Text>
        </View>
        <View style={styles.child}>
          <Text>Ski with friends</Text>
          <Text>The ride up is always more fun with friends. Pack your car with buddies old and new.</Text>
        </View>
        <View style={styles.child}>
          <Text>You've got flexibility</Text>
          <Text>Choose your resort, pick a time, and meet at convenient nearby locations.</Text>
        </View>
        <View style={styles.child}>
          <Text>Reduce your carbon footprint</Text>
          <Text>Fewer cars and less traffic will help us protect the snowpack and the sport we love!</Text>
        </View>
        <View style={styles.child}>
            <Text>Open Source</Text>
            <Text>The source code of Snowpool is available to everyone on <Text style={styles.link} onPress={() => (WebBrowser.openBrowserAsync('https://github.com/SnowpoolApp'))}>GitHub</Text>, the world's largest open source community.</Text>
        </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  child: {
    flexBasis: '20%',
    borderColor: 'black',
    borderWidth: 2
  }, 
});