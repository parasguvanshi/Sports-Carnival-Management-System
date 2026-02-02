import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  KeyboardcontentContainerStyle : {
    flexGrow : 1,
  },
  KeyboardBackground: {
    backgroundColor: color.color.secondary,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: fonts.fontSizes.xxl,
    fontWeight: fonts.fontsWeight.bold,
    fontFamily: 'Gilroy',
  },
  imageContainer : {
    alignItems : 'center',
    marginBottom : 20,
  },
  innerImageContainer : {
    padding : 10,
    width : 270,
    height :200,
  },
  image : {
    width : '100%',
    height : '100%'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color.secondary,
    padding: 18,
    justifyContent: 'center',
  },
  inputFieldContainer: {
    color: color.text.textPrimary,
    gap: 5,
    marginTop: 15,
  },
  labelText: {
    fontSize: fonts.fontSizes.md,
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.regular,
  },
  inputField: {
    backgroundColor: color.color.secondary,
    padding: 12,
    paddingLeft: 15,
    fontSize: fonts.fontSizes.xs,
    borderColor: color.color.borderPrimary,
    borderWidth: 2,
    borderRadius: 15,
  },
  loginTextContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
   passwordContainer: {
  position: 'relative',
  justifyContent: 'center',
},

eyeIcon: {
  position: 'absolute',
  right: 12,
  height: '100%',
  justifyContent: 'center',
},
});

export default styles;
