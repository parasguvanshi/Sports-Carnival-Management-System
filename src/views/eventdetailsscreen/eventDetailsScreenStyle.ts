import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: color.color.primary,
  },
  imageContainer: {
    height: 220,
    padding: 3,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: color.color.secondary,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  headerImageStyle: {
    resizeMode: 'cover',
    borderRadius: 12,
  },

  eventTitle: {
    fontSize: fonts.fontSizes.xl,
    fontWeight: fonts.fontsWeight.bold,
    color: color.text.textSecondary,
    margin: 10,
  },
  detailsContainer: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  detailText: {
    fontSize: fonts.fontSizes.md,
    color: color.text.textGrey,
  },
  rulesContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: fonts.fontSizes.lg,
    fontWeight: fonts.fontsWeight.semiBold,
    color: color.text.textGrey,
    marginBottom: 8,
  },
  rulesText: {
    fontSize: fonts.fontSizes.sm,
    color: color.text.textGrey,
    lineHeight: 20,
  },
});

export default styles;
