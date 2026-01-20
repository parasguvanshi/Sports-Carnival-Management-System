import { Pressable, Text} from 'react-native'
import React from 'react'
import styles from './button';

type buttonProp = {
    name : string;
    onPress? : () => void;
    disabled? : boolean; 
}

const Button = ({name , onPress , disabled=false} : buttonProp) => {
  return (
    <Pressable  style={[disabled ? styles.disableButton : styles.button]} onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>
            {name}
        </Text>
    </Pressable>
  )
}

export default Button
