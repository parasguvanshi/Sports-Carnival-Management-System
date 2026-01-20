import { Keyboard, StyleSheet } from "react-native";
import { color } from "../../themeconstants/colorConstants";
import { fonts } from "../../themeconstants/fontsConstants";

const styles = StyleSheet.create({
    KeyboardBackground : {
        backgroundColor : color.primary
    },
    headerContainer : {
        marginBottom : 50
    },
    headerText : {
        textAlign : 'center',
        fontSize : fonts.fontSizes.xxl,
        fontWeight : fonts.fontsWeight.bold,
        fontFamily : 'Gilroy'
    },
    container: {
        width : '100%',
        height : '100%',
        backgroundColor: color.primary,
        padding : 18,
        justifyContent : 'center',
    },
    inputFieldContainer : {
        color : color.textPrimary,
        gap : 5,
        marginTop:15
    },
    labelText: {
        fontSize : fonts.fontSizes.md,
        color : color.textPrimary,
        fontWeight : fonts.fontsWeight.regular,
    },
    inputField : {
        backgroundColor : color.secondary,
        padding : 12,
        paddingLeft : 15,
        fontSize : fonts.fontSizes.xs,
        borderColor : color.borderPrimary,
        borderWidth : 2,
        borderRadius : 15 
    },
    loginTextContainer : {
        marginTop :10,
        justifyContent : 'center',
        flexDirection :'row',
    }
})

export default styles;