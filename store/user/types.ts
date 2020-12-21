import { USER_CLEAR_DATA, USER_STORE_DATA } from './action-types';

export interface UserState {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

interface ClearDataAction {
  type: typeof USER_CLEAR_DATA,
};

interface StoreDataAction {
  type: typeof USER_STORE_DATA,
  payload: UserState,
};

export type UserActionTypes = ClearDataAction | StoreDataAction;
