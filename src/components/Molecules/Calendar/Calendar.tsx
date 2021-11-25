import { Feather } from '@expo/vector-icons';
import { eachDayOfInterval, format, parseISO } from 'date-fns';
import React, { useCallback, useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';

import { DATE_FORMAT } from '../../../utils/date';
import { calendarTheme, startDayCustomMark } from './styles';
import { colors } from '../../../constants/theme';

// import { Container } from './styles';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';

const CustomCalendar = () => {
  const today = new Date();
  const [markedDates, setMarkedDates] = useState({});
  const [startingDay, setStartingDay] = useState<string>();

  const handlePress = useCallback(
    (day) => {
      const dayString = day?.dateString;
      if (!startingDay) {
        setStartingDay(dayString);
        setMarkedDates({
          ...markedDates,
          [dayString]: {
            startingDay: true,
            selected: true,
            color: colors.lightBlue,
            textColor: 'white',
            customStyles: startDayCustomMark,
          },
        });
      }

      if (startingDay) {
        if (dayString === startingDay) {
          setStartingDay('');
          setMarkedDates({});
        }
        if (parseISO(startingDay) < parseISO(dayString)) {
          const period = eachDayOfInterval({
            start: parseISO(startingDay),
            end: parseISO(dayString),
          });
          const intervalMarks = period.map((day) => {
            return {
              [format(day, DATE_FORMAT)]: {
                selected: true,
                color: colors.lightBlue,
                textColor: 'white',
              },
            };
          });

          const objDates = Object.values(Object.assign({}, intervalMarks));
          const marks = objDates.reduce((a, b) => {
            delete a[startingDay];
            return { ...a, ...b };
          }, {});
          setMarkedDates({
            [startingDay]: {
              startingDay: true,
              selected: true,
              color: colors.lightBlue,
              textColor: 'white',
              customStyles: startDayCustomMark,
            },
            ...marks,
            [dayString]: {
              endingDay: true,
              selected: true,
              color: colors.lightBlue,
              textColor: 'white',
              customStyles: startDayCustomMark,
            },
          });
        }
      }
    },
    [markedDates, startingDay]
  );

  return (
    <Calendar
      theme={calendarTheme}
      minDate={today}
      onDayPress={handlePress}
      markingType="period"
      markedDates={markedDates}
      renderArrow={(direction) => (
        <Feather name={`arrow-${direction}` as any} size={28} color="#cccc" />
      )}
    />
  );
};

export default CustomCalendar;
