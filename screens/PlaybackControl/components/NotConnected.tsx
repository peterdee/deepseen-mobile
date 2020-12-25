import React from 'react';

import { Text } from '../../../components/Themed';
import { styles } from '../styles';

export const NotConnected = (): JSX.Element => (
  <Text style={styles.title}>
    Desktop application is not connected!
  </Text>
);
