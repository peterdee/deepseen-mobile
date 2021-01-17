import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import colors from '../../constants/Colors';
import { RootStackParamList } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    paddingVertical: 16,
  },
  linkText: {
    fontSize: 14,
    color: colors.accent,
  },
});

export const NotFound = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      This screen doesn't exist.
    </Text>
    <Pressable
      onPress={() => navigation.replace('Root')}
      style={styles.link}
    >
      <Text style={styles.linkText}>
        Go to home screen!
      </Text>
    </Pressable>
  </View>
);
