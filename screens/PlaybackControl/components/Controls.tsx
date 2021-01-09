import React, { useCallback } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

import colors from '../../../constants/Colors';
import { ControlsProps } from '../types';
import formatName from '../../../utilities/format-track-name';
import { styles } from '../styles';
import { Text, View } from '../../../components/Themed';

import InfoModal from './InfoModal';
import PlaybackControls from './PlaybackControls';
import PlaybackSettings from './PlaybackSettings';
import ProgressBar from './ProgressBar';
import TopBar from './TopBar';

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
    showProgressBar,
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
      <TopBar setInfoModalVisible={setInfoModalVisible} />
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
      <PlaybackControls
        handleControls={handleControls}
        isPlaying={isPlaying}
        shuffle={shuffle}
      />
    </View>
  );
};
