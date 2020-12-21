import { UserActionTypes, UserState } from './types';
import { USER_CLEAR_DATA, USER_STORE_DATA } from './action-types';

export const clearData = (): UserActionTypes => ({
  type: USER_CLEAR_DATA,
});

export const storeData = (payload: UserState): UserActionTypes => ({
  payload,
  type: USER_STORE_DATA,
});
