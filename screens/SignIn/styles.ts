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
  title: {
    color: colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 48,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBackground,
    borderRadius: 5,
    borderWidth: 2,
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
    padding: 16,
    width: '80%',
  },
  inputDisabled: {
    backgroundColor: colors.inputBackgroundDisabled,
    borderColor: colors.inputBackgroundDisabled,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: colors.accent,
    borderRadius: 5,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: '80%',
  },
  buttonDisabled: {
    borderColor: colors.accentMuted,
  },
  buttonText: {
    color: colors.accent,
    fontSize: 16,
  },
  buttonTextDisabled: {
    color: colors.accentMuted,
  },
  errorContainer: {
    height: 20,
    marginBottom: 16,
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
  },
});
