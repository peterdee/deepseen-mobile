import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

import { CLIENT_TYPE, CLIENT_TYPES } from '../../constants/Values';
import Events from '../../constants/Events';
import IoContext from '../../contexts/socket-io';
import { View } from '../../components/Themed';
import {
  DesktopInitData,
  RoomStatusData,
  Track,
  StopPlaybackData,
  UpdateCurrentTrackData,
  UpdateMuteData,
  UpdatePlaybackStateData,
  UpdateProgressData,
  UpdateVolumeData,
} from './types';
import { RootState } from '../../store';
import { styles } from './styles';

import { Controls } from './components/Controls';
import { NotConnected } from './components/NotConnected';

/**
 * Playback Control screen
 * @returns {JSX.Element}
 */
export const PlaybackControl = (): JSX.Element => {
  const connection = useContext(IoContext);

  const auth = useSelector((state: RootState) => state.auth);

  const [desktopConnected, setDesktopConnected] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileConnected, setMobileConnected] = useState(false);
  const [progress, setProgress] = useState(0);
  const [track, setTrack] = useState({} as Track);
  const [volume, setVolume] = useState(0);

  // handle incoming connect event
  const connect = useCallback(
    () => setMobileConnected(true),
    [],
  );

  // handle incoming connect_error event
  const connectError = useCallback(
    (error: any) => console.log('-> CONNECT_ERROR\n', JSON.stringify(error)),
    [],
  );

  // handle incoming DESKTOP_INIT event
  const desktopInit = useCallback(
    (data: DesktopInitData) => {
      const {
        elapsed: incomingElapsed = 0,
        isMuted: incomingIsMuted = false,
        isPlaying: incomingIsPlaying = false,
        progress: incomingProgress = 0,
        target = '',
        track: incomingTrack = {} as Track,
        volume: incomingVolume = 0,
      } = data;
      if (!(target && target === CLIENT_TYPE)) {
        return false;
      }
      console.log('desktopInit', data);
      setElapsed(incomingElapsed);
      setIsMuted(incomingIsMuted);
      setIsPlaying(incomingIsPlaying);
      setProgress(incomingProgress);
      setTrack({ ...incomingTrack });
      return setVolume(Math.round(Number(incomingVolume) * 100));
    },
    [setTrack, track],
  );

  // handle incoming disconnect event
  const disconnect = useCallback(
    () => setMobileConnected(false),
    [],
  );

  // handle incoming ROOM_STATUS event
  const roomStatus = useCallback(
    (data: RoomStatusData): boolean | void => {
      const { room, target = '' } = data;
      if (!(target && target === CLIENT_TYPE)) {
        return false;
      }

      if (!(Array.isArray(room) && room.length > 0)) {
        return false;
      }

      const filtered = room.filter(({ client = '' }) => client === CLIENT_TYPES.desktop);
      if (filtered.length > 0) {
        return setDesktopConnected(true);
      }

      return false;
    },
    [],
  );

  // handle incoming STOP_PLAYBACK event
  const stopPlayback = useCallback(
    (data: StopPlaybackData): void => {
      const { target = '' } = data;
      if (target === CLIENT_TYPE) {
        setElapsed(0);
        setIsPlaying(false);
        setProgress(0);
      }
    },
    [],
  );

  // handle incoming UPDATE_CURRENT_TRACK event
  const updateCurrentTrack = useCallback(
    (data: UpdateCurrentTrackData): void => {
      const { target = '', track: incomingTrack } = data;
      if (target === CLIENT_TYPE) {
        if (!isPlaying) {
          setIsPlaying(true);
        }
        setElapsed(0);
        setProgress(0);
        setTrack({ ...incomingTrack });
      }
    },
    [],
  );

  // handle incoming UPDATE_MUTE event
  const updateMute = useCallback(
    (data: UpdateMuteData): void => {
      const { isMuted: incoming = false, target = '' } = data;
      if (target === CLIENT_TYPE) {
        setIsMuted(incoming);
      }
    },
    [],
  );

  // handle incoming UPDATE_PLAYBACK_STATE event
  const updatePlaybackState = useCallback(
    (data: UpdatePlaybackStateData) => {
      const { isPlaying: incoming = false, target = '' } = data;
      if (target === CLIENT_TYPE) {
        setIsPlaying(incoming);
      }
    },
    [],
  );

  // handle incoming UPDATE_PROGRESS event
  const updateProgress = useCallback(
    (data: UpdateProgressData) => {
      const { progress: incomingProgress = 0, target = '' } = data;
      if (target === CLIENT_TYPE) {
        // TODO: track is not accessible, fix that
        console.log('handle progress update', track, elapsed)
        if (track && track.duration) {
          console.log('here')
          setElapsed((Number(track.duration) / 200) * Number(incomingProgress));
        }
        setProgress(Number(incomingProgress));
      }
    },
    [setElapsed, setProgress, setTrack, track],
  );

  // handle incoming UPDATE_VOLUME event
  const updateVolume = useCallback(
    (data: UpdateVolumeData) => {
      const { target = '', volume } = data;
      if (target === CLIENT_TYPE) {
        setVolume(Math.round(Number(volume) * 100));
      }
    },
    [],
  );

  useEffect(() => {
    // set token and open the Socket.IO connection
    connection.io.opts.query = { token: auth.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJtb2JpbGUiLCJpbWFnZSI6IiQyYSQxMCRCRVhGUDhSdVpKeUJtZ2ltREtUcWNPakl4V2llN2s0UUxjVHFZcS54SU5UNzVNeHU1S3c2QyIsInVzZXJJZCI6IjVmZDcyY2RjYTJhNmQxM2U2MmRiMjkwOSIsImV4cCI6MTk2ODc0Mjg0MH0.VbO1JZQRSVOPXIUb79iMiIAUt5wURbeuoPCi4QjDMlk' };
    connection.open();

    // add event listeners for the incoming events
    connection.on(Events.CONNECT, connect);
    connection.on(Events.CONNECT_ERROR, connectError);
    connection.on(Events.DESKTOP_INIT, desktopInit);
    connection.on(Events.DISCONNECT, disconnect);
    connection.on(Events.ROOM_STATUS, roomStatus);
    connection.on(Events.STOP_PLAYBACK, stopPlayback);
    connection.on(Events.UPDATE_CURRENT_TRACK, updateCurrentTrack);
    connection.on(Events.UPDATE_MUTE, updateMute);
    connection.on(Events.UPDATE_PLAYBACK_STATE, updatePlaybackState);
    connection.on(Events.UPDATE_PROGRESS, updateProgress);
    connection.on(Events.UPDATE_VOLUME, updateVolume);

    return () => {
      connection.off(Events.CONNECT, connect);
      connection.off(Events.CONNECT_ERROR, connectError);
      connection.off(Events.DESKTOP_INIT, desktopInit);
      connection.off(Events.DISCONNECT, disconnect);
      connection.off(Events.ROOM_STATUS, roomStatus);
      connection.off(Events.STOP_PLAYBACK, stopPlayback);
      connection.off(Events.UPDATE_CURRENT_TRACK, updateCurrentTrack);
      connection.off(Events.UPDATE_MUTE, updateMute);
      connection.off(Events.UPDATE_PLAYBACK_STATE, updatePlaybackState);
      connection.off(Events.UPDATE_PROGRESS, updateProgress);
      connection.off(Events.UPDATE_VOLUME, updateVolume);

      connection.close();
    };
  }, []);

  /**
   * Handle playback controls
   * @param {string} event - Websockets event
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleControls = useCallback(
    (event: string): boolean | typeof Socket => {
      if (!connection.connected) {
        return false;
      }
      return connection.emit(event);
    },
    [],
  );

  /**
   * Handle volume muting
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleMute = useCallback(
    (): boolean | void => {
      if (!connection.connected) {
        return false;
      }
      connection.emit(
        Events.UPDATE_MUTE,
        {
          isMuted: !isMuted,
        },
      );
      return setIsMuted(!isMuted);
    },
    [isMuted, setIsMuted],
  );

  /**
   * Handle player volume change
   * @param {number|string} value - volume value
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleVolume = useCallback(
    (value: number | string): boolean | typeof Socket => {
      if (!connection.connected) {
        return false;
      }
      setIsMuted(false);
      setVolume(Number(value));
      return connection.emit(
        Events.UPDATE_VOLUME,
        {
          volume: value,
        },
      );
    },
    [setIsMuted, setVolume, volume],
  );

  /**
   * Handle track progress change
   * @param {number|string} value - progress value
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleProgress = useCallback(
    (value: number | string): boolean | typeof Socket => {
      if (!connection.connected) {
        return false;
      }
      if (track && track.duration) {
        setElapsed((Number(track.duration) / 200) * Number(value));
      }
      setProgress(Number(value));
      return connection.emit(
        Events.UPDATE_PROGRESS,
        {
          progress: value,
        },
      );
    },
    [elapsed, progress, setElapsed, setProgress, track],
  );

  return (
    <View style={styles.container}>
      { desktopConnected && mobileConnected
        ? (
          <Controls
            elapsed={elapsed}
            handleControls={handleControls}
            handleMute={handleMute}
            handleProgress={handleProgress}
            handleVolume={handleVolume}
            isMuted={isMuted}
            isPlaying={isPlaying}
            progress={progress}
            track={track}
            volume={volume}
          />
        )
        : (
          <NotConnected />
        )
      }
    </View>
  );
}
