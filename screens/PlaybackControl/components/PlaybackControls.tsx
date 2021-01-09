import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Pressable, StyleSheet, View } from 'react-native';

import colors from '../../../constants/Colors';
import Events from '../../../constants/Events';

interface PlaybackControlsProps {
  handleControls: (value: string) => void;
  isPlaying: boolean;
  shuffle: boolean;
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    width: '80%',
  },
});

const ICON_SIZE = 32;

export default (props: PlaybackControlsProps): JSX.Element => {
  const {
    handleControls,
    isPlaying,
    shuffle,
  } = props;

  return (
    <View style={styles.view}>
      <Pressable
        disabled={shuffle}
        onPress={() => handleControls(Events.PLAY_PREVIOUS)}
      >
        <FontAwesome5
          color={shuffle ? colors.tabIconInactive : colors.accent}
          name="backward"
          size={ICON_SIZE}
        />
      </Pressable>
      <Pressable onPress={() => handleControls(Events.STOP_PLAYBACK)}>
        <FontAwesome5
          color={colors.accent}
          name="stop"
          size={ICON_SIZE}
        />
      </Pressable>
      <Pressable onPress={() => handleControls(Events.PLAY_PAUSE)}>
        { isPlaying && (
          <FontAwesome5
            color={colors.accent}
            name="pause"
            size={ICON_SIZE}
          />
        ) }
        { !isPlaying && (
          <FontAwesome5
            color={colors.accent}
            name="play"
            size={ICON_SIZE}
          />
        ) }  
      </Pressable>
      <Pressable onPress={() => handleControls(Events.PLAY_NEXT)}>
        <FontAwesome5
          color={colors.accent}
          name="forward"
          size={ICON_SIZE}
        />
      </Pressable>
    </View>
  );
};
