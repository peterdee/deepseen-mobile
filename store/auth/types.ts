import { AUTH_SET_AUTHENTICATION, AUTH_SET_TOKEN } from './action-types';

export interface SetAuthenticationPayload {
  isAuthenticated: boolean;
}

export interface SetTokenPayload {
  token: string;
}

export type AuthState = SetAuthenticationPayload & SetTokenPayload;

interface SetAuthenticationAction {
  payload: SetAuthenticationPayload,
  type: typeof AUTH_SET_AUTHENTICATION,
};

interface SetTokenAction {
  payload: SetTokenPayload,
  type: typeof AUTH_SET_TOKEN,
};

export type AuthActionTypes = SetAuthenticationAction | SetTokenAction;
