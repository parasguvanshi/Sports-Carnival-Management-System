import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    textAlign: 'center',
    color: theme.colors.textPrimary
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontWeight : 400,
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'black',
  },
  selectedCard: {
    borderColor: '#007BFF',
    backgroundColor: '#EEF5FF',
  },
  icon: {
    fontSize: 28,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight:500,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#726d6d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles