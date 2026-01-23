import { StyleSheet } from "react-native";
import { color } from "../../theme/colorConstants";
import { fonts } from "../../theme/fontsConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.fontSizes.xl,
    fontWeight: fonts.fontsWeight.bold,
    textAlign: 'center',
    color: color.textPrimary
  },
  subtitle: {
    fontSize: 16,
    color: color.textPrimary,
    textAlign: 'center',
    fontWeight : fonts.fontsWeight.regular,
    marginBottom: 20,
  },
  card: {
    backgroundColor: color.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: color.borderPrimary,
  },
  selectedCard: {
    borderColor: '#007BFF',
    backgroundColor: '#EEF5FF',
  },
  icon: {
    fontSize: fonts.fontSizes.xl,
  },
  cardTitle: {
    fontSize: fonts.fontSizes.sm,
    fontWeight: fonts.fontsWeight.semiBold,
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: color.textPrimary,
    fontWeight:500,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: color.disableColor,
  },
  buttonText: {
    color: '#fff',
    fontSize: fonts.fontSizes.xs,
    fontWeight: fonts.fontsWeight.medium,
  },
});

export default styles