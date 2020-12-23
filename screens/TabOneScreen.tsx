import React, { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Events from '../constants/Events';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  // const [connection, setConnection] = useState({} as SocketIOClient);

  const { current: connection } = useRef<typeof Socket>(
    io(
      '',
      {
        query: {
          token: '',
        },
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 10000,
        // withCredentials: true,
      }
    ),
  );

  useEffect(() => {
    console.log('-> RUN useEffect');

    try {
      console.log('open connection');
      connection.open();

      setTimeout(() => console.log('is connected:', connection.connected), 2000);
      connection.on('PLAY_NEXT', () => {
        console.log('play next in');
      });
    } catch (error) {
      console.log('error', error);
      connection.close();
    }

    return () => {
      console.log('close connection')
      connection.close();
    };
  }, []);

  connection.on('ROOM_STATUS', (data) => {
    console.log('room status', data);
  });

  connection.on(Events.CONNECT_ERROR, (error) => {
    console.log('>>>>>>>> connect error\n', JSON.stringify(error));
  });

  connection.on('connect', () => {
    console.log('connected');
  });

  connection.on('disconnect', (reason: string) => {
    console.log('disconnected', reason);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playback Controls</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
