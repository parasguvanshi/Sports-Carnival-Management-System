import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  KeyboardcontentContainerStyle: {
    flexGrow: 1,
  },
  KeyboardBackground: {
    backgroundColor: color.color.secondary,
  },
  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: fonts.fontSizes.xxl,
    fontWeight: fonts.fontsWeight.bold,
    fontFamily: 'Gilroy',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  innerImageContainer: {
    padding: 10,
    width: 270,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color.secondary,
    padding: 15,
    justifyContent: 'center',
  },
  inputFieldContainer: {
    color: color.text.textPrimary,
    gap: 5,
    marginTop: 25,
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
  buttonText: {
    fontWeight: fonts.fontsWeight.regular,
    color: color.text.textPrimary,
  },
  forgotPasswordText: {
    margin: 5,
    fontWeight: fonts.fontsWeight.regular,
    color: color.text.textPrimary,
  },
  signUpButtonText: {
    marginTop: 10,
    alignSelf: 'center',
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
