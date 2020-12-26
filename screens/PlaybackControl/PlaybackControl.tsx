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
  RoomStatusData,
  Track,
  UpdateCurrentTrackData,
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
  const [track, setTrack] = useState({} as Track);

  const [desktopConnected, setDesktopConnected] = useState(false);
  const [mobileConnected, setMobileConnected] = useState(false);
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

  // handle incoming UPDATE_CURRENT_TRACK event
  const updateCurrentTrack = useCallback(
    (data: UpdateCurrentTrackData): void => {
      const { target = '', track } = data;
      if (target === CLIENT_TYPE) {
        setTrack(track);
      }
    },
    [],
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
    connection.on(Events.DISCONNECT, disconnect);
    connection.on(Events.ROOM_STATUS, roomStatus);
    connection.on(Events.UPDATE_CURRENT_TRACK, updateCurrentTrack);
    connection.on(Events.UPDATE_VOLUME, updateVolume);

    return () => {
      connection.off(Events.CONNECT, connect);
      connection.off(Events.CONNECT_ERROR, connectError);
      connection.off(Events.ROOM_STATUS, disconnect);
      connection.off(Events.ROOM_STATUS, roomStatus);
      connection.off(Events.UPDATE_CURRENT_TRACK, updateCurrentTrack);
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
   * Handle player volume change
   * @param {number|string} value - volume value
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleVolume = useCallback(
    (value: number | string): boolean | typeof Socket => {
      if (!connection.connected) {
        return false;
      }
      return connection.emit(
        Events.UPDATE_VOLUME,
        {
          volume: value,
        },
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      { desktopConnected && mobileConnected
        ? (
          <Controls
            handleControls={handleControls}
            handleVolume={handleVolume}
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
