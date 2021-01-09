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
import SettingsModal from './SettingsModal';
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
    setSettingsModalVisible,
    settingsModalVisible,
    showElapsedTime,
    showProgressBar,
    shuffle,
    track,
    volume,
  } = props;

  /**
   * Handle Info modal closing
   * @returns {void}
   */
  const closeInfoModal = useCallback(
    (): void => setInfoModalVisible(false),
    [setInfoModalVisible],
  );

  /**
   * Handle Settings modal closing
   * @returns {void}
   */
  const closeSettingsModal = useCallback(
    (): void => setSettingsModalVisible(false),
    [setSettingsModalVisible],
  );

  return (
    <View style={styles.controls}>
      <InfoModal
        closeModal={closeInfoModal}
        infoModalVisible={infoModalVisible}
        track={track}
      />
      <SettingsModal
        closeModal={closeSettingsModal}
        settingsModalVisible={settingsModalVisible}
        showElapsedTime={showElapsedTime}
        showProgressBar={showProgressBar}
      />
      <TopBar
        setInfoModalVisible={setInfoModalVisible}
        setSettingsModalVisible={setSettingsModalVisible}
      />
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
