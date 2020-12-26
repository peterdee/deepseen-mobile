import React from 'react';
import { Button } from 'react-native';
import Slider from '@react-native-community/slider';

import { ControlsProps } from '../types';
import Events from '../../../constants/Events';
import formatName from '../../../utilities/format-track-name';
import { styles } from '../styles';
import { Text, View } from '../../../components/Themed';

/**
 * Display playback controls
 * @param {ControlsProps} props - component props
 * @returns {JSX.Element}
 */
export const Controls = (props: ControlsProps): JSX.Element => {
  const {
    handleControls,
    handleMute,
    handleVolume,
    isMuted,
    isPlaying,
    track,
    volume,
  } = props;

  return (
    <View style={styles.trackInfo}>
      <Text style={styles.title}>
        { formatName(track.name) }
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.volumeRow}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onSlidingComplete={handleVolume}
          step={1}
          style={{width: 200, height: 40}}
          value={isMuted ? 0 : volume}
        />
        <Button
          onPress={handleMute}
          title={`${isMuted ? 'Unmute' : 'Mute'}`}
        >
          { isMuted ? 'UNMUTE' : 'MUTE' }
        </Button>
      </View>
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
          title={`${isPlaying ? 'Pause' : 'Play'}`}
        >
          { isPlaying ? 'PAUSE' : 'PLAY' }
        </Button>
        <Button
          onPress={() => handleControls(Events.PLAY_NEXT)}
          title="Next"
        >
          NEXT
        </Button>
      </View>
    </View>
  );
}
