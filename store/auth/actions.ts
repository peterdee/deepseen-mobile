import { AUTH_SET_AUTHENTICATION, AUTH_SET_TOKEN } from './action-types';
import {
  AuthActionTypes,
  SetAuthenticationPayload,
  SetTokenPayload,
} from './types';

export const setAuthentication = (payload: SetAuthenticationPayload): AuthActionTypes => ({
  payload,
  type: AUTH_SET_AUTHENTICATION,
});

export const setToken = (payload: SetTokenPayload): AuthActionTypes => ({
  payload,
  type: AUTH_SET_TOKEN,
});
