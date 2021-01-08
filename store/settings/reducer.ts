import {
  SETTINGS_SWITCH_ELAPSED_TIME,
  SETTINGS_SWITCH_PROGRESS_BAR,
 } from './action-types';
import { SettingsActionTypes, SettingsState } from './types'

const initialState: SettingsState = {
  showElapsedTime: true,
  showProgressBar: true,
};

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes,
): SettingsState {
  switch (action.type) {
    case SETTINGS_SWITCH_ELAPSED_TIME: {
      return {
        ...state,
        showElapsedTime: action.payload.showElapsedTime,
      };
    }
    case SETTINGS_SWITCH_PROGRESS_BAR: {
      return {
        ...state,
        showProgressBar: action.payload.showProgressBar,
      };
    }
    default:
      return state;
  }
}
