import { USER_CLEAR_DATA, USER_STORE_DATA } from './action-types';
import { UserState, UserActionTypes  } from './types'

const initialState: UserState = {
  email: '',
  firstName: '',
  id: '',
  lastName: ''
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case USER_CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    case USER_STORE_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
