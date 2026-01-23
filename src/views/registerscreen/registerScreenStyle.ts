import { Keyboard, StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  KeyboardcontentContainerStyle : {
    flexGrow : 1,
  },
  KeyboardBackground: {
    backgroundColor: color.color.primary,
  },
  headerContainer: {
    marginBottom: 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: fonts.fontSizes.xxl,
    fontWeight: fonts.fontsWeight.bold,
    fontFamily: 'Gilroy',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color.primary,
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
  signUpText: {},
});

export default styles;
