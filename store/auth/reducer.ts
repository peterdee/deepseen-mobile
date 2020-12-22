import { AUTH_SET_AUTHENTICATION, AUTH_SET_TOKEN } from './action-types';
import { AuthActionTypes, AuthState } from './types'

const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case AUTH_SET_AUTHENTICATION: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    case AUTH_SET_TOKEN: {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    default:
      return state;
  }
}
