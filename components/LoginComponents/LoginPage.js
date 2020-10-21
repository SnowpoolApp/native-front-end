import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
import { faSkiing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// var FBLoginButton = require('../FBLoginButton.js')
import FBLoginButton from "../FBLoginButton.js"

import Snowpool from "../../assets/snowpool-background-min.jpg";

export default function LoginPage({ navigation }) {
  return (
    <ImageBackground source={Snowpool} style={styles.image}>
      <View style={styles.parent}>
        <View style={styles.horizontal} >
           
            <Text style={styles.title}><FontAwesomeIcon size={ 35 } style={styles.icon} icon={ faSkiing } /> Snowpool</Text>
            <Text style={styles.text}> demo</Text>
        </View>
        <Text style={styles.text}>Open Source Carpooling Platform</Text>
        <View style={styles.horizontal}>
            <Button color='#336bc4'
                title="Log in with Facebook"
                onPress={() => navigation.navigate("Account Page")}
            />
            {/* <FBLoginButton /> */}
            <Text style={styles.link} onPress={() => console.log("clicked")}>
                Why Facebook?
            </Text>
        </View>
        <Text style={styles.demo}>
            We will never post anything without your explicit consent.~{"\n"}
            This is a demo application. By clicking on "Sign In" you agree to our
            Demo Terms on slide 3 →
        </Text>
        <Text style={styles.text}>Swipe to learn more →</Text>
      </View>
    </ImageBackground>
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
  icon: {
    color: '#fff',
    borderColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {width: -1, height: 1},
    shadowRadius: 10,
    alignSelf: 'center',
    },
});