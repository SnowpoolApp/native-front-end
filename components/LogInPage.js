import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
// var Swiper = require('react-native-swiper')
// var FBLoginButton = require('./FBLoginButton')

import Snowpool from "../assets/snowpool-background-min.jpg";

export default function LoginPage({ navigation }) {
  return (
    // <Swiper style={styles.wrapper} showsButtons={true}>
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
        Demo Terms.
      </Text>
      <Button color='#336bc4' title="Learn more" onPress={() => console.log("pressed")} />
      </View>
    </ImageBackground>Z
    {/* <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
    </Swiper> */}
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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5
    // fontFamily: 'Pacifico'
  },
  link: {
    color: "white",
    fontSize: 15,
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5
    // fontFamily: 'Pacifico'
  },
  demo: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5,
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
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  }
});
