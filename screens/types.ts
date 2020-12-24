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
};

export interface DesktopInitData {
  elapsed: number;
  isMuted: boolean;
  isPlaying: boolean;
  progress: number;
  target: string;
  track: Track;
  volume: number;
};

export interface RoomStatusData {
  room: ClientRecord[];
  target: string;
};

export interface UpdateCurrentTrackData {
  target: string;
  track: Track;
};

export type IncomingEvent = UpdateCurrentTrackData
| DesktopInitData
| RoomStatusData
| Target
