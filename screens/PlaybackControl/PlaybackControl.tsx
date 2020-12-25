import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import io, { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

import { CLIENT_TYPE } from '../../constants/Values';
import Events from '../../constants/Events';
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

export const PlaybackControl = (): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth);
  const [track, setTrack] = useState({} as Track);

  const [desktopConnected, setDesktopConnected] = useState(false);
  const [mobileConnected, setMobileConnected] = useState(false);
  const [volume, setVolume] = useState(0);

  // store connection
  const { current: connection } = useRef<typeof Socket>(
    io(
      'https://deepseen-ws.herokuapp.com',
      {
        query: {
          token: auth.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJtb2JpbGUiLCJpbWFnZSI6IiQyYSQxMCRCRVhGUDhSdVpKeUJtZ2ltREtUcWNPakl4V2llN2s0UUxjVHFZcS54SU5UNzVNeHU1S3c2QyIsInVzZXJJZCI6IjVmZDcyY2RjYTJhNmQxM2U2MmRiMjkwOSIsImV4cCI6MTk2ODc0Mjg0MH0.VbO1JZQRSVOPXIUb79iMiIAUt5wURbeuoPCi4QjDMlk',
        },
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 10000,
      }
    ),
  );

  useEffect(() => {
    connection.open();

    return () => {
      connection.close();
    };
  }, []);

  connection.on(Events.CONNECT_ERROR, (error: any) => {
    console.log('>>>>>>>> connect error\n', JSON.stringify(error));
  });

  connection.on(Events.CONNECT, () => setMobileConnected(true));

  connection.on(Events.DISCONNECT, () => setMobileConnected(false));

  // check if desktop is connected
  connection.on(
    Events.ROOM_STATUS,
    (data: RoomStatusData) => {
      const { room, target = '' } = data;
      if (!(target && target === CLIENT_TYPE)) {
        return false;
      }

      if (Array.isArray(room) && room.length > 0) {
        const filtered = room.filter(({ client = '' }) => client === 'desktop');
        if (filtered.length > 0) {
          setDesktopConnected(true);
        }
      }
    },
  );

  // update track data
  connection.on(
    Events.UPDATE_CURRENT_TRACK,
    (data: UpdateCurrentTrackData) => {
      const { target = '', track } = data;
      if (target === CLIENT_TYPE) {
        setTrack(track);
      }
    },
  );

  // update volume
  connection.on(
    Events.UPDATE_VOLUME,
    (data: UpdateVolumeData) => {
      console.log('set vol', data)
      const { target = '', volume } = data;
      if (target === CLIENT_TYPE) {
        setVolume(Math.round(Number(volume) * 100));
      }
    },
  );

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
    [connection],
  );

  /**
   * Handle player volume
   * @param {number|string} value - volume value
   * @returns {boolean|SocketIOClient.Socket}
   */
  const handleVolume = useCallback(
    (value: number | string): boolean | typeof Socket => {
      if (!connection.connected) {
        return false;
      }
      console.log('emit from mobile')
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
