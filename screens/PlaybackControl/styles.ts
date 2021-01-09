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
  controls: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '80%',
  },
  bottomWrap: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
