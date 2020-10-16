import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
var Swiper = require('react-native-swiper')
// var FBLoginButton = require('./FBLoginButton')

import Snowpool from "../assets/snowpool-background-min.jpg";

export default function LoginPage({ navigation }) {
  return (
    <Swiper loop={false} style={styles.wrapper} showsButtons={true}>
    <ImageBackground source={Snowpool} style={styles.image}>
      <View style={styles.parent}>
      <View style={styles.horizontal} >
      <Text style={styles.title}>Snowpool</Text>
      <Text style={styles.text}> demo</Text>
      </View>
      <Text style={styles.text}>Open Source Carpooling Platform</Text>
      <View style={styles.horizontal}>
      <Button color='#336bc4'
        title="Log in with Facebook"
        onPress={() => navigation.navigate("Account Page")}
      />
      <Text style={styles.link} onPress={() => console.log("clicked")}>
        Why Facebook?
      </Text>
      </View>
      <Text style={styles.demo}>
        We will never post anything without your explicit consent.~{"\n"}
        This is a demo application. By clicking on "Sign In" you agree to our
        Demo Terms →
      </Text>
      <Text style={styles.text}>↔ Swipe to learn more ↔</Text>
      </View>
      
    </ImageBackground>
    <View style={styles.slide2}>
          <Text style={styles.header}>
          Terms of Service (Demo)
          </Text>
          <Text>
            Last modified: September 30, 2018
          </Text>
          <Text style={[styles.header, styles.subheader]} >
            Welcome to Snowpool
            </Text>
            <Text>
            This is a demo application of the open source carpooling platform Snowpool.

            The source code is available at https://github.com/diowa/icare

            </Text>
          <Text style={[styles.header, styles.subheader]} >
          Our Warranties and Disclaimers
            </Text>
            <Text>
            
            WE PROVIDE THIS DEMO "AS IS", WITHOUT ANY WARRANTY.
            </Text>
          <Text style={[styles.header, styles.subheader]} >
          Privacy policy
            </Text>
            <Text>
            
            We cache the following Facebook data on our local database for performance reasons:

            Email, name, birthday, likes.
            We do not store your public profile picture.
            We will not send you any email.

            You can permanently delete your data by logging in and clicking the "Delete account" button on the footer.
        </Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
    </Swiper>
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
  wrapper: {},
  // slide1: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#9DD6EB'
  // },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 200,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  }
});
