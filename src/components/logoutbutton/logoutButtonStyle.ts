import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: color.color.borderPrimary,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: color.color.danger,
  },
  buttonText: {
    color: color.text.textSecondary,
    fontWeight: fonts.fontsWeight.medium,
  },
});

export default styles;
