import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

import colors from '../../../constants/Colors';
import { ControlsProps } from '../types';
import Events from '../../../constants/Events';
import formatName from '../../../utilities/format-track-name';
import formatTime from '../../../utilities/format-time';
import { styles } from '../styles';
import { Text, View } from '../../../components/Themed';

/**
 * Display playback controls
 * @param {ControlsProps} props - component props
 * @returns {JSX.Element}
 */
export const Controls = (props: ControlsProps): JSX.Element => {
  const {
    elapsed,
    handleControls,
    handleMute,
    handleProgress,
    handleVolume,
    isMuted,
    isPlaying,
    progress,
    track,
    volume,
  } = props;

  return (
    <View style={styles.trackInfo}>
      <Text style={styles.title}>
        { formatName(track.name) }
      </Text>
      <View style={styles.volumeRow}>
        <Pressable onPress={handleMute}>
          { isMuted && (
            <FontAwesome5 name="volume-mute" size={24} color={colors.accent} />
          ) }
          { !isMuted && (
            <FontAwesome5 name="volume-up" size={24} color={colors.accent} />
          ) }
        </Pressable>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={colors.accent}
          maximumTrackTintColor="#ffffff"
          onSlidingComplete={handleVolume}
          step={1}
          style={{width: 200, height: 40}}
          value={isMuted ? 0 : volume}
        />
      </View>
      <View style={styles.progress}>
        <View style={styles.progressTimes}>
          <Text style={styles.times}>
            { formatTime(elapsed) }
          </Text>
          <Text style={styles.times}>
            { formatTime(track.duration) }
          </Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={200}
          minimumTrackTintColor={colors.accent}
          maximumTrackTintColor="#ffffff"
          onSlidingComplete={handleProgress}
          step={1}
          style={styles.progressBar}
          value={progress}
        />
      </View>
      <View style={styles.controls}>
        <Pressable onPress={() => handleControls(Events.PLAY_PREVIOUS)}>
          <FontAwesome5
            color={colors.accent}
            name="backward"
            size={24}
          />
        </Pressable>
        <Pressable onPress={() => handleControls(Events.STOP_PLAYBACK)}>
          <FontAwesome5
            color={colors.accent}
            name="stop"
            size={24}
          />
        </Pressable>
        <Pressable onPress={() => handleControls(Events.PLAY_PAUSE)}>
          { isPlaying && (
            <FontAwesome5
              color={colors.accent}
              name="pause"
              size={24}
            />
          ) }
          { !isPlaying && (
            <FontAwesome5
              color={colors.accent}
              name="play"
              size={24}
            />
          ) }  
        </Pressable>
        <Pressable onPress={() => handleControls(Events.PLAY_NEXT)}>
          <FontAwesome5
            color={colors.accent}
            name="forward"
            size={24}
          />
        </Pressable>
      </View>
    </View>
  );
}
