import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
    width: '100%',
  },
  trackInfo: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  controls: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    width: '80%',
  },
  progress: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    width: '80%',
  },
  progressTimes: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressBar: {
    height: 40,
    width: '100%',
  },
  times: {
    color: 'white',
    fontSize: 16,
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
  volumeRow: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
