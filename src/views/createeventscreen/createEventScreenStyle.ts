import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding: 16,
  },

  inputContainerList: {
    marginTop: 20,
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
    borderColor: color.color.borderPrimary,
    borderWidth: 1,
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
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  formatButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.color.borderPrimary,
    backgroundColor: color.color.secondary,
  },

  formatButtonSelected: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.color.buttonBackground,
    backgroundColor: color.color.buttonBackground,
  },

  dropdownOverlay: {
    flex: 1,
    backgroundColor: color.color.backgroundRgba,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dropdown: {
    backgroundColor: color.color.secondary,
    width: 150,
    borderRadius: 8,
    paddingVertical: 8,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  dropdownText: {
    color: color.text.textPrimary,
    fontSize: 14,
  },

  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  formatSlotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  slotDropdownButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: color.color.borderPrimary,
    borderRadius: 8,
    backgroundColor: color.color.secondary,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: color.color.backgroundRgba,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: color.color.primary,
    borderRadius: 12,
    padding: 16,
    minWidth: 300,
  },
  doneButton: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    marginTop: 12,
    alignSelf: 'flex-end',
  },
});
