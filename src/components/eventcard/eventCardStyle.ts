import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

export default StyleSheet.create({
  card: {
    height: 180,
    width : 300,
    padding: 3,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: color.color.secondary,
    marginRight : 10
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  cardImage: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  textLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  eventTitle: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textSecondary,
    flex: 1,
    marginRight: 8,
  },
  eventText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.medium,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  iconBtn: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    opacity: 0.85,
    gap: 4,
    borderColor: color.color.background,
    borderWidth: 2,
    paddingHorizontal: 6,
    borderRadius: 20,
  },
  joinIconBtn: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    opacity: 0.85,
    gap: 4,
    borderColor: color.color.background,
    borderWidth: 2,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  iconText: {
    color: color.text.textPrimary,
    fontSize: fonts.fontSizes.xxs,
  },
});
