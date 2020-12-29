import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { clearData } from '../../store/user/actions';
import { RootStackParamList } from '../../types';
import { RootState } from '../../store';
import { setAuthentication, setToken } from '../../store/auth/actions';
import { styles } from './styles';
import { Text, View } from '../../components/Themed';

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

  // check if authenticated
  useEffect(
    () => {
      if (!(isAuthenticated && token)) {
        navigation.navigate('SignIn');
      }
    },
    [],
  );

  const handleLogout = () => {
    dispatch(clearData());
    dispatch(setAuthentication({ isAuthenticated: false }));
    dispatch(setToken({ token: '' }));
    return navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleLogout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          SIGN OUT
        </Text>
      </Pressable>
    </View>
  );
}
