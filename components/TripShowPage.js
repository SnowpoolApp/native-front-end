import React from 'react'
import DATA from "../trips-data";
import { View, Button, Text } from 'react-native'

export default function TripShowPage (props) {
    return(
        <View>
            <Text>Hi from Trip Page</Text>
            <Text style={styles.titleText}>Trips</Text>
        </View>
    )
}