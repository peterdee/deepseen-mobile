import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Pressable,
  Text, 
  TextInput,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { SignInResponse } from './types';
import { RootStackParamList } from '../../types';
import { styles } from './styles';
import { CLIENT_TYPE } from '../../constants/Values';
import { RootState } from '../../store';

export const SignIn = (
  { navigation }: StackScreenProps<RootStackParamList, 'SignIn'>,
) => {
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated,
  );
  const token = useSelector<RootState, string>(
    (state) => state.auth.token,
  );

  useEffect(
    () => {
      async function checkAccess() {
      if (isAuthenticated && token) {
        // get user record to check if token is valid
        try {
          setLoading(true);
          await axios({
            headers: {
              Authorization: token,
            },
            method: 'GET',
            url: 'https://deepseen-backend.herokuapp.com/api/user',
          });
          setLoading(false);
          navigation.replace('Root');
        } catch {
          setLoading(false);
        }
      }
    }
    checkAccess();
    },
    [],
  );

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  /**
   * Handle inputs
   * @param {string} input - input type
   * @param {string} value - input value
   * @returns {void}
   */
  const handleInput = (input: string, value: string) => {
    setError('');
    if (input === 'email') {
      return setEmail(value);
    }
    return setPassword(value);
  }

  /**
   * Handle Sign In form submit
   * @returns {Promise<*>}
   */
  const handleSubmit = useCallback(
    async () => {
      // check data
      if (!(email && email.trim() && password && password.trim())) {
        return setError('Please provide your credentials!');
      }

      setLoading(true);
      try {
        const { data }: { data: SignInResponse } = await axios({
          data: {
            client: CLIENT_TYPE,
            email: email.trim(),
            password: password.trim(),
          },
          method: 'POST',
          url: 'https://deepseen-backend.herokuapp.com/api/auth/signin',
        });
        console.log('response', data);
        setLoading(false);
        // TODO: set token and user data before redirecting
        // return navigation.replace('Root');
      } catch (error) {
        console.log(error);
        setLoading(false);
        return setError('Error!');
      }
    },
    [email, error, password, setError],
  );

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        editable={!loading}
        onChangeText={(value) => handleInput('email', value)}
        placeholder="Email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', color: 'white' }}
        value={email}
      />
      <TextInput
        autoCapitalize="none"
        editable={!loading}
        onChangeText={(value) => handleInput('password', value)}
        placeholder="Password"
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', color: 'white' }}
        value={password}
      />
      <View style={{ height: 40 }}>
        <Text
          style={{ color: 'white' }}
        >
          { !loading && error ? error : '' }
        </Text>
      </View>
      <Pressable
        disabled={loading}
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text
          style={{ color: 'white' }}
        >
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};
