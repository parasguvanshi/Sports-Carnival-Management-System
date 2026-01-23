import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';
import { eventImage } from '../../constant/imageConstant';

type ImageKey = keyof typeof eventImage;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding: 16,
  },

  inputContainerList: {
    marginTop: 10,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.semiBold,
    marginBottom: 6,
    color: color.text.textPrimary,
  },

  input: {
    backgroundColor: color.color.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: fonts.fontSizes.xs,
    color: color.text.textPrimary,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  createButton: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.color.createButton,
    paddingVertical: 14,
    borderRadius: 28,
    elevation: 3,
  },

  createButtonText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.medium,
    marginLeft: 8,
  },

  keyContainer: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: color.color.borderPrimary,
    borderRadius: 4,
  },
  keyContainerOptional: {
    padding: 8,
    margin: 4,

    borderRadius: 4,
    borderWidth: 2,
    borderColor: color.color.buttonBackground,
  },
  keyAlignment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
