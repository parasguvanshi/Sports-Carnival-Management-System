import { StyleSheet } from "react-native";
import { color } from "../../theme/colorConstants";
import { fonts } from "../../theme/fontsConstants";

const styles = StyleSheet.create({
    button : {
        width:'100%',
        color: 'white',
        backgroundColor : color.buttonBackground,
        padding: 10,
        fontSize : fonts.fontSizes.lg,
        borderRadius : 20,
        marginTop : 30
    },
    buttonText:{
        color : color.textSecondary,
        fontSize : fonts.fontSizes.lg,
        textAlign : 'center',
        fontWeight : fonts.fontsWeight.bold
    },
    disableButton : {
        backgroundColor : color.disableColor,
        width:'100%',
        color: color.textSecondary,
        padding: 10,
        fontSize : fonts.fontSizes.lg,
        borderRadius : 20,
        marginTop : 30
    }
})

export default styles;