import { StyleSheet } from 'react-native';

import { colors, fontFamily, fontSizes } from '../../../constants/theme';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#FFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  // modalContent: {
  //   height: height * 0.9,
  // },
  wrapper: {
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: 40,
  },
});

export default styles;

export const calendarTheme = {
  todayTextColor: colors.black,
  selectedDayTextColor: colors.white,
  arrowColor: colors.black,
  // textDayFontFamily: fontFamily.bold,
  // textMonthFontFamily: fontFamily.bold,
  // textDayHeaderFontFamily: fontFamily.bold,
  textMonthFontSize: fontSizes.md,
  textDayHeaderFontSize: fontSizes.md,
  textDisabledColor: colors.lightGrey,
  monthTextColor: colors.darkGrey,
  textSectionTitleColor: colors.black,
};

export const startDayCustomMark = {
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
  },
};

export const endDayCustomMark = {
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
  },
};

export const selectedCustomMark = {
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
  },
};
