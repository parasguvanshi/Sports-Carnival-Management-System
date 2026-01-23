import { StyleSheet } from 'react-native';
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
    marginBottom: 60,
  },
  headerText: {
    fontSize: fonts.fontSizes.xxl,
    fontWeight: fonts.fontsWeight.bold,
    fontFamily: 'Gilroy',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color.primary,
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
    marginTop: 0,
    fontWeight: fonts.fontsWeight.regular,
    color: color.text.textPrimary,
  },
  textAlignmentContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUpButtonText: {
    flexDirection: 'row',
  },
});

export default styles;
