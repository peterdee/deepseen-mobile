import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { BACKEND_URL } from '../../configuration';
import { CLIENT_TYPE } from '../../constants/Values';
import Form, { formInputs } from './components/Form';
import { RootStackParamList } from '../../types';
import { RootState } from '../../store';
import { setAuthentication, setToken } from '../../store/auth/actions';
import { SignInResponse } from './types';
import { storeData } from '../../store/user/actions';

export const SignIn = (
  { navigation }: StackScreenProps<RootStackParamList, 'SignIn'>,
): JSX.Element => {
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated,
  );
  const token = useSelector<RootState, string>(
    (state) => state.auth.token,
  );

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  // check if signed in
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
              url: `${BACKEND_URL}/api/user`,
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

  /**
   * Handle inputs
   * @param {string} input - input type
   * @param {string} value - input value
   * @returns {void}
   */
  const handleInput = (input: string, value: string): void => {
    setError('');
    if (input === formInputs.email.name) {
      return setEmail(value);
    }
    if (input === formInputs.password.name) {
      return setPassword(value);
    }
  };

  /**
   * Handle Sign In form submit
   * @returns {Promise<void>}
   */
  const handleSubmit = useCallback(
    async (): Promise<void> => {
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
          url: `${BACKEND_URL}/api/auth/signin`,
        });

        setLoading(false);
        dispatch(setAuthentication({ isAuthenticated: true }));
        dispatch(setToken({ token: data.data.token }));
        dispatch(storeData({
          email: data.data.user.email,
          firstName: data.data.user.firstName,
          id: data.data.user.id,
          lastName: data.data.user.lastName,
        }));

        return navigation.replace('Root');
      } catch (error) {
        setLoading(false);
        const { response: { data: { info = '', status = 400 } = {} } = {} } = error;
        if (info && status) {
          if (info === 'INTERNAL_SERVER_ERROR' && status === 500) {
            return setError('Error signing in!');
          }
          if (info === 'MISSING_DATA' && status === 400) {
            return setError('Missing data!');
          }
        }

        return setError('Access denied!');
      }
    },
    [
      email,
      error,
      loading,
      password,
      setError,
      setLoading,
    ],
  );

  return (
    <Form
      email={email}
      error={error}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      loading={loading}
      password={password}
    />
  );
};
