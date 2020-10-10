import React from 'react'
import { View, Button, ImagePropTypes } from 'react-native'

export default TestButton = (props) => {
    return(
        <View>
            <Button onPress={() => {
                console.log("pressed")
            }} title={props.name} />
        </View>
    )
}