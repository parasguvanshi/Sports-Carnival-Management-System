import { StyleSheet } from "react-native";
import {theme} from '../../theme/theme';

const styles = StyleSheet.create({
    KeyboardBackground : {
        backgroundColor : theme.colors.primary
    },
     header : {
        marginBottom : 60,
    },
    headerText : {
        fontSize : 40,
        fontWeight : 900,
        fontFamily : 'Gilroy',
        textAlign : 'center'
    },
    viewContainer: {
        width : '100%',
        height : '100%',
        backgroundColor: theme.colors.primary,
        padding : 15,
        justifyContent : 'center',
        
    },
    viewBox : {
        color : 'black',
        gap : 5,
        marginTop : 25
    },
    textBox : {
        fontSize : 22,
        color : theme.colors.textPrimary,
        fontWeight : 500,

    },
    inputBox : {
        backgroundColor : theme.colors.secondary,
        padding : 12,
        paddingLeft : 15,
        fontSize : 18,
        borderColor : 'black',
        borderWidth : 3,
        borderRadius : 15,
    },
    buttonText : {
        marginTop : 30,
        textAlign : 'center',
        fontWeight : 400,
        color : theme.colors.textPrimary
        
    },
    forgotText : {
        marginTop : 10,
        fontWeight : 400,
        color : theme.colors.textPrimary
    }
    
})

export default styles;