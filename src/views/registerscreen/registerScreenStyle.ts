import { Keyboard, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    KeyboardBackground : {
        backgroundColor : theme.colors.primary
    },
    header : {
        marginBottom : 50

    },
    headerText : {
        textAlign : 'center',
        fontSize : 40,
        fontWeight : 900,
        fontFamily : 'Gilroy'
    },
    viewContainer: {
        width : '100%',
        height : '100%',
        backgroundColor: theme.colors.primary,
        padding : 18,
        justifyContent : 'center',
    },
    viewBox : {
        color : 'black',
        gap : 5,
        marginTop:15
    },
    textBox : {
        fontSize : 22,
        color : theme.colors.textPrimary,
        fontWeight : 500
    },
    inputBox : {
        backgroundColor : theme.colors.secondary,
        padding : 12,
        paddingLeft : 15,
        fontSize : 18,
        borderColor : 'black',
        borderWidth : 3,
        borderRadius : 15 
    },
    buttonText : {
        marginTop : 10,
        textAlign : 'center'
    }
    
})

export default styles;