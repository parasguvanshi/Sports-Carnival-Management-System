import { StyleSheet } from 'react-native';
import { color } from '../../theme/colorConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color.primary,
    padding:16,
  },

  listContent: {
    paddingTop: 12,
    paddingBottom: 30,
  },
});

export default styles;
