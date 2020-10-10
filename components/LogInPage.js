import React from 'react'
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native'

import SnowpoolBackground from '../assets/snowpool-background-min.jpg'

export default function LoginPage(){
    return(
        <View>
            <ImageBackground source={SnowpoolBackground} style={styles.image}>
            <Text style={styles.text}>Snowpool demo</Text>
            <Text style={styles.text}>Open Source Carpooling Platform</Text>
            <Button onPress={() => {
                console.log("pressed")
            }} title="Log in with Facebook" />
            <Text style={styles.text}
      onPress={() => console.log('clicked!')}>Why Facebook?</Text>
            <Text style={styles.text}>We will never post anything without your explicit consent.</Text>
            <Text style={styles.text}>This is a demo application. By clicking on "Sign In" you agree to our Demo Terms.</Text>
            <Button title='Learn more' onPress={()=>console.log('pressed')} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: 'white',
        fontSize: 35
        // fontFamily: 'Pacifico'
    }
})