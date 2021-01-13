import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  userData: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  initials: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 50,
    color: colors.textDark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64,
    width: 64,
  },
  initialsText: {
    color: colors.textDark,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    color: colors.textLight,
    fontSize: 20,
    marginLeft: 16,
  },
});
