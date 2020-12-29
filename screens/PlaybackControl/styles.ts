import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '200px',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  controls: {
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 48,
    textAlign: 'center',
  },
  trackInfo: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  volumeRow: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  times: {
    color: 'white',
  },
});
