import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profile: {
    borderColor: color.color.borderPrimary,
    borderWidth: 2,
    borderRadius: 20,
    padding: 3,
  },
  headerTitle: {
    fontSize: fonts.fontSizes.sm,
    fontWeight: fonts.fontsWeight.medium,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 12,
  },
});

export default styles;
