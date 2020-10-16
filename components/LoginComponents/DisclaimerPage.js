import React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

export default function DisclaimerPage({ navigation }) {
  return (
    <View style={styles.slide2}>
          <Text style={styles.header}>
          Terms of Service (Demo)
          </Text>
          <Text style={styles.disclaimer}>
            Last modified: September 30, 2018
          </Text>
          <Text style={[styles.header, styles.subheader]} >
            Welcome to Snowpool
            </Text>
            <Text style={styles.disclaimer}>
            This is a demo application of the open source <Text style={styles.link} onPress={() => (WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Carpool'))}>carpooling</Text> platform Snowpool.

            The source code is available <Text style={styles.link} onPress={() => (WebBrowser.openBrowserAsync('https://github.com/diowa/icare'))}>here</Text>

            </Text>
          <Text style={[styles.header, styles.subheader]} >
          Our Warranties and Disclaimers
            </Text>
            <Text style={styles.disclaimer}>
            
            WE PROVIDE THIS DEMO "AS IS", WITHOUT ANY WARRANTY.
            </Text>
          <Text style={[styles.header, styles.subheader]} >
          Privacy policy
            </Text>
            <Text style={styles.disclaimer}>
            
            We cache the following Facebook data on our local database for performance reasons:{'\n'}{'\n'}

            Email, name, birthday, likes.{'\n'}{'\n'}
            We do not store your public profile picture.
            We will not send you any email.

            You can permanently delete your data by logging in and clicking the "Delete account" button on the footer.
        </Text>
        </View>
  );
}

const styles = StyleSheet.create({
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
  disclaimer: {
    padding: 5,
    lineHeight: 25,
    fontSize: 16
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
  }
});
