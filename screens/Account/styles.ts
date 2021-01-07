import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  userData: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  initials: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 50,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64,
    width: 64,
  },
  initialsText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  email: {
    color: 'white',
    fontSize: 16,
    marginBottom: 48,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    borderColor: colors.error,
    borderRadius: 5,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: '80%',
  },
  buttonText: {
    color: colors.error,
    fontSize: 16,
    textAlign: 'center',
  },
});
