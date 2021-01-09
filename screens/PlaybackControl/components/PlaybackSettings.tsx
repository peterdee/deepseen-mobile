import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import colors from '../../../constants/Colors';

interface PlaybackSettingsProps {
  loop: boolean;
  queue: number | string;
  shuffle: boolean;
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const ICON_SIZE = 20;

export default (props: PlaybackSettingsProps): JSX.Element => {
  const {
    loop,
    queue,
    shuffle,
  } = props;

  return (
    <View style={styles.view}>
      <Entypo
        color={shuffle ? colors.textLight : colors.tabIconInactive}
        name="shuffle"
        size={ICON_SIZE}
      />
      <Entypo
        color={loop ? colors.textLight : colors.tabIconInactive}
        name="loop"
        size={ICON_SIZE}
      />
      <Entypo
        color={Number(queue) > 0 ? colors.textLight : colors.tabIconInactive}
        name="list"
        size={ICON_SIZE}
      />
    </View>
  );
};
