import {
  SETTINGS_SWITCH_ELAPSED_TIME,
  SETTINGS_SWITCH_PROGRESS_BAR,
} from './action-types';
import {
  SettingsActionTypes,
  SwitchElapsedTimePayload,
  SwitchProgressBarPayload,
} from './types';

export const switchElapsedTime = (payload: SwitchElapsedTimePayload): SettingsActionTypes => ({
  payload,
  type: SETTINGS_SWITCH_ELAPSED_TIME,
});

export const switchProgressBar = (payload: SwitchProgressBarPayload): SettingsActionTypes => ({
  payload,
  type: SETTINGS_SWITCH_PROGRESS_BAR,
});
