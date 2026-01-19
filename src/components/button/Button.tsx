import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme/theme';
import React from 'react'

type buttonProp = {
    name : string;
    onPress? : () => void
}

const Button = ({name , onPress} : buttonProp) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
            {name}
        </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button : {
        width:'100%',
        color: 'white',
        backgroundColor : theme.colors.buttonBackground,
        padding: 10,
        fontSize : 20,
        borderRadius : 10,
        marginTop : 30
    },
    buttonText:{
        color : 'white',
        fontSize : 20,
        textAlign : 'center',
        fontWeight : 900
    }
})