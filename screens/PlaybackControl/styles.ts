import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.tabIconInactive,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  controls: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 32,
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '80%',
  },
  trackInfo: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  volumeRow: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  times: {
    color: 'white',
    fontSize: 16,
  },
});
