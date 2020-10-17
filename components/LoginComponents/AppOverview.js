import React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRoute, faUsers, faClock, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function AppOverview() {
  return (
    <View style={styles.slide2}>
        <View style={[styles.child, styles.horizontal]}>
            <FontAwesomeIcon size={ 45 } style={styles.icon} icon={ faRoute } />
            <View style={styles.textChild}>
                <Text style={styles.text}>Share rides</Text>
                <Text>Check out upcoming trips to offer a ride or grab a ride.</Text>
            </View>
        </View>

        <View style={[styles.child, styles.grey,styles.horizontal]}>
            <View style={[styles.textChild, styles.grey]}>
                <Text style={styles.text}>Ski with friends</Text>
                <Text>The ride up is always more fun with friends. Pack your car with buddies old and new.</Text>
            </View>
            <FontAwesomeIcon size={ 45 } style={styles.icon} icon={ faUsers } />
        </View>

        <View style={[styles.child,styles.horizontal]}>
            <FontAwesomeIcon size={ 45 } style={styles.icon} icon={ faClock } />
            <View style={styles.textChild}>
                <Text style={styles.text}>You've got flexibility</Text>
                <Text>Choose your resort, pick a time, and meet at convenient nearby locations.</Text>
            </View>
        </View>

        <View style={[styles.child, styles.grey,styles.horizontal]}>
            <View style={[styles.textChild, styles.grey]}>
                <Text style={styles.text}>Reduce your carbon footprint</Text>
                <Text>Fewer cars and less traffic will help us protect the snowpack and the sport we love!</Text>
            </View>
            <FontAwesomeIcon size={ 45 } style={styles.icon} icon={ faLeaf } />
        </View>

        <View style={[styles.child,styles.horizontal]}>
            <FontAwesomeIcon size={ 45 } style={styles.icon} icon={ faGithub } />
            <View style={styles.textChild}>
                <Text style={styles.text}>Open Source</Text>
                <Text>The source code of Snowpool is available to everyone on <Text style={styles.link} onPress={() => (WebBrowser.openBrowserAsync('https://github.com/SnowpoolApp'))}>GitHub</Text>, the world's largest open source community.</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 horizontal:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontSize: 25,
    margin: 5
  },
  link: {
    color: "#5287d1",
    fontSize: 15,
    margin: 5
  },
 slide2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textChild: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight:20
  },
  child: {
    flex: 1,
    flexBasis: 'auto',
  },
  icon: {
      color: '#63afff',
      flex: 2
  },
  grey:{
      backgroundColor: '#e6e6e6'
  }
});