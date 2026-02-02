import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  KeyboardcontentContainerStyle: {
    flexGrow: 1,
  },
  KeyboardBackground: {
    backgroundColor: color.color.primary,
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color.secondary,
    padding: 15,
    justifyContent: 'center',
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

  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: fonts.fontSizes.xl,
    fontWeight: fonts.fontsWeight.bold,
    fontFamily: 'Gilroy',
    textAlign: 'center',
    color: color.text.textPrimary,
  },

  inputFieldContainer: {
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
});

export default styles;
