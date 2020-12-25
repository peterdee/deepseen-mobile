import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from 'react-native';
import io, { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

import { CLIENT_TYPE } from '../constants/Values';
import Events from '../constants/Events';
import formatName from '../utilities/format-track-name';
import { Text, View } from '../components/Themed';
import {
  RoomStatusData,
  Track,
  UpdateCurrentTrackData,
} from './types';
import { RootState } from '../store';
import { styles } from './TabOneStyles';

export default () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [track, setTrack] = useState({} as Track);

  const [desktopConnected, setDesktopConnected] = useState(false);
  const [mobileConnected, setMobileConnected] = useState(false);

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

  return (
    <View style={styles.container}>
      { desktopConnected && mobileConnected
        ? (
          <View style={styles.trackInfo}>
            <Text style={styles.title}>
              { formatName(track.name) }
            </Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.controls}>
              <Button
                onPress={() => handleControls(Events.PLAY_PREVIOUS)}
                title="Previous"
              >
                PREVIOUS
              </Button>
              <Button
                onPress={() => handleControls(Events.STOP_PLAYBACK)}
                title="Stop"
              >
                STOP
              </Button>
              <Button
                onPress={() => handleControls(Events.PLAY_PAUSE)}
                title="Play"
              >
                PLAY
              </Button>
              <Button
                onPress={() => handleControls(Events.PLAY_NEXT)}
                title="Next"
              >
                NEXT
              </Button>
            </View>
          </View>
        )
        : (
          <Text style={styles.title}>
            Desktop application is not connected
          </Text>
        )
      }
    </View>
  );
}
