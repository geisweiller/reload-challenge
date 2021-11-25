import { StyleSheet } from 'react-native';

import { colors, fontFamily } from '../../constants/theme';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  banner: {
    width: '100%',
  },
  tab: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 2,
    borderColor: colors.clear,
    paddingTop: 8,
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    fontFamily: fontFamily.bold,
  },
  indicator: {
    backgroundColor: colors.black,
    height: 2,
    marginBottom: -2,
    borderRadius: 2,
  },
  openModalButton: {
    alignSelf: 'center',
    backgroundColor: colors.lightBlue,
    padding: 20,
    borderRadius: 10,
  }

});

export default styles;
