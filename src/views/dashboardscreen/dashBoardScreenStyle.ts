// dashBoardScreenStyle.ts
import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: color.color.primary,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  greeting: {
    fontSize: fonts.fontSizes.xl,
    fontWeight: fonts.fontsWeight.bold,
    color: color.text.textPrimary,
    marginBottom: 10,
  },
  subGreeting: {
    fontSize: fonts.fontSizes.sm,
    color: color.text.textGrey,
    marginBottom: 20,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: color.color.secondary,
    padding: 12,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 3,
  },
  statValue: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.bold,
  },
  statLabel: {
    fontSize: fonts.fontSizes.xxs,
    color: color.text.textGrey,
    marginTop: 6,
  },

  sectionCard: {
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    padding: 10,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: fonts.fontSizes.md,
    fontWeight: fonts.fontsWeight.semiBold,
    marginBottom: 12,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: color.color.background,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  primaryAction: {
    backgroundColor: color.color.createButton,
    marginRight: 0,
    marginLeft: 5,
  },
  actionText: {
    color: color.text.textSecondary,
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.semiBold,
  },

  sectionHeader: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    marginBottom: 12,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.color.secondary,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 14,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: fonts.fontSizes.sm,
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: color.color.secondary,
    borderRadius: 16,
    padding: 6,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: color.color.primary,
  },
  tabText: {
    color: color.text.textGrey,
  },
  activeTabText: {
    fontWeight: fonts.fontsWeight.medium,
    color: color.text.textPrimary,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
});
