import React from 'react';
import { Socket } from 'socket.io-client';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../constants/Colors';

import BigButton from '../../../components/BigButton';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
  title: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    color: colors.textLight,
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'center',
  },
});

interface ComponentProps {
  onPress: () => boolean | typeof Socket;
};

export default (props: ComponentProps): JSX.Element => {
  const { onPress } = props;

  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        Mobile application is already connected!
      </Text>
      <Text style={styles.message}>
        Please close all of the other copies of the Deepseen mobile application!
      </Text>
      <BigButton
        onPress={onPress}
        text="RECONNECT"
      />
    </View>
  );
};
