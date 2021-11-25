import { Dimensions, StyleSheet } from 'react-native';

import { colors, fontFamily, fontSizes } from '../../../constants/theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: 'absolute',
    top: height * 0.4,
    bottom: 0,
    left: 0,
    width: '100%',
    margin: 0,
    padding: 10,
    backgroundColor: colors.clear,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'space-between',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    marginLeft: 20,
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.md2,
  },
  button: {
    backgroundColor: colors.clear,
  },
});

export default styles;
