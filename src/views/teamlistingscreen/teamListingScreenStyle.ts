import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding: 16,
  },

  listContent: {
    paddingBottom: 40,
  },

  sectionHeader: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textPrimary,
    marginVertical: 8,
  },

  playerCard: {
    backgroundColor: color.color.secondary,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  playerName: {
    fontSize: fonts.fontSizes.md,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textPrimary,
  },

  playerNumber: {
    marginTop: 2,
    fontSize: fonts.fontSizes.xs,
    color: color.text.textGrey,
  },

  tabContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  tab: {
    flex: 1,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 16,
  },

  activeTab: {
    backgroundColor: color.color.primary,
  },

  tabText: {
    fontSize: fonts.fontSizes.sm,
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.medium,
  },

  activeTabText: {
    color: color.text.textPrimary,
    fontWeight: fonts.fontsWeight.semiBold,
  },

  teamCard: {
    backgroundColor: color.color.secondary,
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  teamName: {
    fontSize: fonts.fontSizes.md,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textPrimary,
    marginBottom: 8,
  },

  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  playerRowName: {
    fontSize: fonts.fontSizes.md,
    fontWeight: fonts.fontsWeight.medium,
    color: color.text.textPrimary,
  },

  playerRowNumber: {
    fontSize: fonts.fontSizes.sm,
    color: color.text.textGrey,
  },

  emptyContainer: {
    marginTop: 80,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: fonts.fontSizes.md,
    color: color.text.textSecondary,
    fontWeight: fonts.fontsWeight.medium,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default styles;
