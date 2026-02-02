import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: color.color.secondary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: fonts.fontSizes.xxs,
    color: color.text.textPrimary,
  },

  card: {
    height: 180,
    padding: 3,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: color.color.secondary,
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

  content: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  eventTitle: {
    fontSize: fonts.fontSizes.xl,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textSecondary,
  },

  eventText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  iconBtn: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    opacity: 0.8,
    gap: 3,
    borderColor: color.color.background,
    borderWidth: 2,
    paddingHorizontal: 7,
    borderRadius: 20,
  },
  iconText: {
    color: color.text.textPrimary,
  },
  joinIconBtn: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    opacity: 0.8,
    gap: 3,
    borderColor: color.color.background,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  tabContainer: {
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingVertical: 6,
    paddingHorizontal: 2,
    backgroundColor: color.color.secondary,
  },

  tab: {
    flex: 1,
    paddingVertical: 11,
    paddingHorizontal: 2,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  activeTab: {
    backgroundColor: color.color.primary,
  },

  tabText: {
    color: color.text.textGrey,
    fontWeight: fonts.fontsWeight.medium,
  },

  activeTabText: {
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.medium,
  },

  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: color.color.createButton,
    borderRadius: 16,
    marginHorizontal: 2,
    elevation: 3,
  },

  createText: {
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.medium,
    marginLeft: 2,
  },
  contentContainerStyle: {
    paddingBottom: 150,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: fonts.fontSizes.lg,
  },
});

export default styles;
