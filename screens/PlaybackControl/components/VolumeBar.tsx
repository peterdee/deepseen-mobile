import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { Pressable, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

import colors from '../../../constants/Colors';

interface VolumeBarProps {
  handleMute: () => void;
  handleVolume: (value: number) => void;
  isMuted: boolean;
  volume: number;
};

enum VolumeIconEnum {
  High = 'ios-volume-high',
  Low = 'ios-volume-low',
  Medium = 'ios-volume-medium',
  Off = 'ios-volume-off',
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
    width: '80%',
  },
  slider: {
    height: 48,
    width: 200,
  },
});

/**
 * Get a proper volume icon
 * @param {number} volume - volume value
 * @returns {string}
 */
const volumeIcon = (volume: number): VolumeIconEnum => {
  if (!volume) {
    return VolumeIconEnum.Off;
  }
  if (volume > 0 && volume <= 33) {
    return VolumeIconEnum.Low;
  }
  if (volume > 33 && volume <= 66) {
    return VolumeIconEnum.Medium;
  }

  return VolumeIconEnum.High;
};

const ICON_SIZE = 32;

export default (props: VolumeBarProps): JSX.Element => {
  const {
    handleMute,
    handleVolume,
    isMuted,
    volume,
  } = props;

  return (
    <View style={styles.view}>
      <Pressable onPress={handleMute}>
        { isMuted && (
          <Ionicons
            color={colors.accent}
            name="ios-volume-mute"
            size={ICON_SIZE}
          />
        ) }
        { !isMuted && (
          <Ionicons
            color={colors.accent}
            name={volumeIcon(volume)}
            size={ICON_SIZE}
          />
        ) }
      </Pressable>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.textLight}
        onSlidingComplete={handleVolume}
        step={1}
        style={styles.slider}
        value={isMuted ? 0 : volume}
      />
    </View>
  );
};
