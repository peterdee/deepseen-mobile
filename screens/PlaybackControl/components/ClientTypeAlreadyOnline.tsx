import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BigButton from '../../../components/BigButton';

import colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.appBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    color: colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    color: colors.textLight,
    fontSize: 16,
    marginBottom: 16,
  },
});

export default (): JSX.Element => (
  <View style={styles.view}>
    <Text style={styles.title}>
      Mobile application is already connected!
    </Text>
    <Text style={styles.message}>
      Please close all of the other copies of the Deepseen Mobile application!
    </Text>
    <BigButton
      onPress={() => null}
      text="RECONNECT"
    />
  </View>
);
