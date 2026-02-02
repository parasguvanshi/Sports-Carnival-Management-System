import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding:16
  },
  content: {
    paddingBottom: 120,
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    marginBottom: 20,
    padding : 10
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: color.color.primary,
    borderRadius: 12,
  },
  tabText: {
    color: color.text.textGrey,
    fontWeight: fonts.fontsWeight.medium,
  },
  activeTabText: {
    color: color.text.textPrimary,
    fontWeight : fonts.fontsWeight.semiBold
  },

  card: {
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    marginBottom: 16,
    color: color.text.textPrimary,
  },

  input: {
    backgroundColor: color.color.primary,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 16,
    fontSize: 14,
  },

  label: {
    marginTop: 8,
    marginBottom: 10,
    fontWeight: fonts.fontsWeight.medium,
    fontSize:fonts.fontSizes.lg,
    color: color.text.textGrey,
  },

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderChip: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: color.color.primary,
    alignItems: 'center',
  },
  genderChipActive: {
    backgroundColor: color.color.buttonBackground,
  },
  genderText: {
    fontSize: 12,
    fontWeight: fonts.fontsWeight.medium,
    color: color.text.textGrey,
  },
  genderTextActive: {
    color: color.text.textSecondary,
  },

  submitButton: {
    marginTop :100,
    backgroundColor: color.color.buttonBackground,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  submitText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.xxs,
    fontWeight: fonts.fontsWeight.semiBold,
  },
});
