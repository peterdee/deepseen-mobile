import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { ControlsProps } from '../types';
import formatName from '../../../utilities/format-track-name';
import { styles } from '../styles';
import { Text, View } from '../../../components/Themed';

import InfoModal from './InfoModal';
import PlaybackControls from './PlaybackControls';
import PlaybackSettings from './PlaybackSettings';
import ProgressBar from './ProgressBar';
import TopBar from './TopBar';
import VolumeBar from './VolumeBar';

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
    <View style={styles.controls}>
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
      <View style={styles.bottomWrap}>
        <PlaybackSettings
          loop={loop}
          queue={queue}
          shuffle={shuffle}
        />
        <VolumeBar
          handleMute={handleMute}
          handleVolume={handleVolume}
          isMuted={isMuted}
          volume={volume}
        />
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
    </View>
  );
};
