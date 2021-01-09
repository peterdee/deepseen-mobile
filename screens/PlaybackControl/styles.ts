import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
    width: '100%',
  },
  trackInfo: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    marginTop: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '80%',
  },
  volumeRow: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
