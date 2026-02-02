import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },

  userInfo: {
    flex: 1,
  },

  name: {
    fontSize: fonts.fontSizes.md,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textPrimary,
  },

  email: {
    fontSize: fonts.fontSizes.xxs,
    color: color.text.textPrimary,
    marginTop: 2,
  },

  roleBadge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: color.color.primary,
  },

  roleText: {
    fontSize: fonts.fontSizes.xxs,
    fontWeight: fonts.fontsWeight.medium,
    color: color.text.textPrimary,
  },

  deleteBtn: {
    padding: 6,
  },
});

export default styles;
