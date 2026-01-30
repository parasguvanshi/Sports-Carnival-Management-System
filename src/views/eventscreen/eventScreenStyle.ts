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
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
    color: color.text.textPrimary,
  },

  card: {
    height: 220,
    padding: 3,
    borderRadius: 15,
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
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textSecondary,
  },

  eventText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.sm,
    fontWeight: fonts.fontsWeight.medium,
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
    cursor: 'pointer',
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
    cursor: 'pointer',
  },
  tabContainer: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: color.color.secondary,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  activeTab: {
    backgroundColor: color.color.primary,
  },

  tabText: {
    fontSize: 14,
    color: color.text.textPrimary,
    fontWeight: '500',
  },

  activeTabText: {
    color: color.text.textPrimary,
  },

  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: color.color.createButton,
    borderRadius: 24,
    marginHorizontal: 6,
    elevation: 3,
  },

  createText: {
    color: color.text.textPrimary,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default styles;
