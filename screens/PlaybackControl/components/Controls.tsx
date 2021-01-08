import React, { useCallback } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

import colors from '../../../constants/Colors';
import { ControlsProps } from '../types';
import Events from '../../../constants/Events';
import formatName from '../../../utilities/format-track-name';
import { styles } from '../styles';
import { Text, View } from '../../../components/Themed';

import InfoModal from './InfoModal';
import PlaybackSettings from './PlaybackSettings';
import ProgressBar from './ProgressBar';

const ICON_SIZE = 32;

/**
 * Display playback controls
 * @param {ControlsProps} props - component props
 * @returns {JSX.Element}
 */
export default (props: ControlsProps): JSX.Element => {
  const {
    elapsed,
    handleControls,
    handleMute,
    handleProgressSlidingStart,
    handleProgress,
    handleVolume,
    infoModalVisible,
    isMuted,
    isPlaying,
    loop,
    progress,
    queue,
    setInfoModalVisible,
    showElapsedTime,
    shuffle,
    track,
    volume,
  } = props;

  /**
   * Handle modal closing
   * @returns {void}
   */
  const closeModal = useCallback(
    (): void => setInfoModalVisible(false),
    [setInfoModalVisible],
  );

  return (
    <View style={styles.trackInfo}>
      <InfoModal
        closeModal={closeModal}
        infoModalVisible={infoModalVisible}
        track={track}
      />
      <View style={styles.topBar}>
        <Pressable onPress={() => setInfoModalVisible(true)}>
          <FontAwesome5
            color={colors.accent}
            name="info-circle"
            size={ICON_SIZE}
          />
        </Pressable>
        <Pressable>
          <Ionicons
            color={colors.accent}
            name="settings-sharp"
            size={ICON_SIZE}
          />
        </Pressable>
      </View>
      <Pressable onLongPress={() => setInfoModalVisible(true)}>
        <Text style={styles.title}>
          { formatName(track.name, false) }
        </Text>
      </Pressable>
      <PlaybackSettings
        loop={loop}
        queue={queue}
        shuffle={shuffle}
      />
      <View style={styles.volumeRow}>
        <Pressable onPress={handleMute}>
          { isMuted && (
            <FontAwesome5
              color={colors.accent}
              name="volume-mute"
              size={ICON_SIZE}
            />
          ) }
          { !isMuted && (
            <FontAwesome5
              color={colors.accent}
              name="volume-up"
              size={ICON_SIZE}
            />
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
      <ProgressBar
        elapsed={elapsed}
        handleProgress={handleProgress}
        handleProgressSlidingStart={handleProgressSlidingStart}
        progress={progress}
        showElapsedTime={showElapsedTime}
        track={track}
      />
      <View style={styles.controls}>
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
    </View>
  );
};
