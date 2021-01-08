import React from 'react';
import { Text } from 'react-native';

import { styles } from '../styles';

export const NotConnected = (): JSX.Element => (
  <Text style={styles.title}>
    Desktop application is not connected!
  </Text>
);
