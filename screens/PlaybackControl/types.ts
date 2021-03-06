import { Socket } from 'socket.io-client';

export interface ClientRecord {
  client: string;
  socketId: string;
  userId: string;
};

export interface Target {
  target: string;
};

export interface Track {
  added: number;
  available: boolean;
  duration: number;
  id: string;
  name: string;
  path: string;
  size: number;
  type: string;
  url: string;
};

export interface ControlsProps {
  elapsed: number;
  handleClearQueue: () => boolean | typeof Socket;
  handleControls: (value: string) => boolean | typeof Socket;
  handleMute: () => boolean | void;
  handleProgress: (value: number | string) => boolean | typeof Socket;
  handleProgressSlidingStart: () => void;
  handleSwitchLoop: () => void;
  handleSwitchShuffle: () => void;
  handleVolume: (value: number | string) => boolean | typeof Socket;
  infoModalVisible: boolean;
  internalErrorModalVisible: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  loop: boolean;
  progress: number;
  queue: number | string;
  setInfoModalVisible: (value: boolean) => void;
  setInternalErrorModalVisible: (value: boolean) => void;
  setSettingsModalVisible: (value: boolean) => void;
  settingsModalVisible: boolean;
  showElapsedTime: boolean;
  showProgressBar: boolean;
  shuffle: boolean;
  switchElapsedTime: () => void;
  switchProgressBar: () => void;
  track: Track;
  volume: number;
};

export interface ClientDisconnectedData {
  client: string;
};

export interface ClientTypeIsAlreadyOnlineData {
  client: string;
  info: string;
  status: number;
};

export interface DesktopInitData {
  elapsed: number;
  isMuted: boolean;
  isPlaying: boolean;
  loop: boolean;
  progress: number;
  queue: number;
  shuffle: boolean;
  target: string;
  track: Track;
  volume: number;
};

export interface NewClientConnectedData {
  client: string;
};

export interface RoomStatusData {
  room: ClientRecord[];
  target: string;
};

export interface StopPlaybackData {
  target: string;
};

export interface UpdateCurrentTrackData {
  target: string;
  track: Track;
};

export interface UpdateLoopData extends Target {
  loop: boolean;
};

export interface UpdateMuteData {
  isMuted: boolean;
  target: string;
};

export interface UpdatePlaybackStateData {
  isPlaying: boolean;
  target: string;
};

export interface UpdateProgressData {
  progress: number | string;
  target: string;
};

export interface UpdateQueueData extends Target {
  queue: number;
};

export interface UpdateShuffleData extends Target {
  shuffle: boolean;
};

export interface UpdateVolumeData {
  target: string;
  volume: number | string;
};

export type IncomingEvent = UpdateCurrentTrackData
| DesktopInitData
| RoomStatusData
| Target;
