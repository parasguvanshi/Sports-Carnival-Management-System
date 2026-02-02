import { StyleSheet, Platform } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    paddingHorizontal: 16,
  },

  inputContainerList: {
    paddingTop: 12,
    paddingBottom: 120, 
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.semiBold,
    marginBottom: 6,
    color: color.text.textPrimary,
  },

  input: {
    backgroundColor: color.color.secondary,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    fontSize: fonts.fontSizes.xs,
    color: color.text.textPrimary,
    borderWidth: 1,
    borderColor: color.color.borderPrimary,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 14,
  },

  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  createButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: color.color.createButton,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',

  },

  createButtonText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.medium,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: color.color.backgroundRgba,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxWidth: 350,
  },

  dropdownOverlay: {
    flex: 1,
    backgroundColor: color.color.backgroundRgba,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  dropdownContainer: {
    alignSelf:'center',
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    paddingVertical: 6,
    width: 200, 
  },

  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  dropdownText: {
    fontSize: fonts.fontSizes.sm,
    fontWeight: fonts.fontsWeight.medium,
    color: color.text.textPrimary,
    textAlign: 'center',
  },
  Modal : {
    alignSelf: 'flex-end', 
    marginTop: 12,
  }
});
