import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { clearData } from '../../store/user/actions';
import colors from '../../constants/Colors';
import { RootStackParamList } from '../../types';
import { RootState } from '../../store';
import { setAuthentication, setToken } from '../../store/auth/actions';
import { styles } from './styles';
import { UserState } from '../../store/user/types';

import BigButton from '../../components/BigButton';

export const Account = (
  { navigation }: StackScreenProps<RootStackParamList, 'Root'>,
): JSX.Element => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated,
  );
  const token = useSelector<RootState, string>(
    (state) => state.auth.token,
  );
  const user = useSelector<RootState, UserState>((state) => state.user);

  // check if authenticated
  useEffect(
    () => {
      if (!(isAuthenticated && token)) {
        navigation.replace('SignIn');
      }
    },
    [],
  );

  /**
   * Handle signing out
   * @returns {void}
   */
  const handleLogout = (): void => {
    dispatch(clearData());
    dispatch(setAuthentication({ isAuthenticated: false }));
    dispatch(setToken({ token: '' }));
    return navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <View style={styles.initials}>
          <Text style={styles.initialsText}>
            { `${user.firstName[0] || ''}${user.lastName[0] || ''}` }
          </Text>
        </View>
        <Text style={styles.userName}>
          { user.firstName } { user.lastName }
        </Text>
      </View>
      <BigButton
        buttonStyle={{ borderColor: colors.error }}
        onPress={handleLogout}
        text="SIGN OUT"
        textStyle={{ color: colors.error }}
      />
    </View>
  );
};
