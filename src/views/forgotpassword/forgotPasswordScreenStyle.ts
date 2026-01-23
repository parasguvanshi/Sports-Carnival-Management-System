import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding: 16,
    justifyContent: 'center',
  },
  inputFieldContainer: {
    color: color.text.textPrimary,
    gap: 6,
  },
  textLabel: {
    fontSize: fonts.fontSizes.md,
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.regular,
  },
  inputField: {
    width: '100%',
    borderColor: color.color.borderPrimary,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: color.color.secondary,
    fontSize: fonts.fontSizes.xs,
  },
});

export default styles;
