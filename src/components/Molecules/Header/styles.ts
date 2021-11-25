import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight || 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default styles;

