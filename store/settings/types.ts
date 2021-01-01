import {
  SETTINGS_SWITCH_ELAPSED_TIME,
  SETTINGS_SWITCH_PROGRESS_BAR,
} from './action-types';

export interface SwitchElapsedTimePayload {
  showElapsedTime: boolean;
}

export interface SwitchProgressBarPayload {
  showProgressBar: boolean;
}

export type SettingsState = SwitchElapsedTimePayload & SwitchProgressBarPayload;

interface SwitchElapsedTimeAction {
  payload: SwitchElapsedTimePayload,
  type: typeof SETTINGS_SWITCH_ELAPSED_TIME,
};

interface SwitchProgressBarAction {
  payload: SwitchProgressBarPayload,
  type: typeof SETTINGS_SWITCH_PROGRESS_BAR,
};

export type SettingsActionTypes = SwitchElapsedTimeAction | SwitchProgressBarAction;
