import { EventsList } from './types';

// Possible events
export default {
  CLEAR_QUEUE: 'CLEAR_QUEUE',
  CLIENT_DISCONNECTED: 'CLIENT_DISCONNECTED',
  CLIENT_TYPE_IS_ALREADY_ONLINE: 'CLIENT_TYPE_IS_ALREADY_ONLINE',
  COMPLETE_LOGOUT: 'COMPLETE_LOGOUT',
  CONNECT: 'connect',
  CONNECT_ERROR: 'connect_error',
  DESKTOP_INIT: 'DESKTOP_INIT',
  DISCONNECT: 'disconnect',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NEW_CLIENT_CONNECTED: 'NEW_CLIENT_CONNECTED',
  PLAY_NEXT: 'PLAY_NEXT',
  PLAY_PAUSE: 'PLAY_PAUSE',
  PLAY_PREVIOUS: 'PLAY_PREVIOUS',
  ROOM_STATUS: 'ROOM_STATUS',
  STOP_PLAYBACK: 'STOP_PLAYBACK',
  UPDATE_CURRENT_TRACK: 'UPDATE_CURRENT_TRACK',
  UPDATE_LOOP: 'UPDATE_LOOP',
  UPDATE_MUTE: 'UPDATE_MUTE',
  UPDATE_PLAYBACK_STATE: 'UPDATE_PLAYBACK_STATE',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  UPDATE_QUEUE: 'UPDATE_QUEUE',
  UPDATE_SHUFFLE: 'UPDATE_SHUFFLE',
  UPDATE_VOLUME: 'UPDATE_VOLUME',
} as EventsList;
