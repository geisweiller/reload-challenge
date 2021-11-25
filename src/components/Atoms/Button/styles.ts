import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../constants/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    alignSelf: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.clear,
    fontSize: fontSizes.md,
  },
});

export default styles;
