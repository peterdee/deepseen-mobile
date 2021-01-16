import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

import { ControlsProps } from '../types';
import formatName from '../../../utilities/format-track-name';
import { styles } from '../styles';

import InfoModal from './InfoModal';
import InternalErrorModal from './InternalErrorModal';
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
    handleClearQueue,
    handleControls,
    handleMute,
    handleProgressSlidingStart,
    handleProgress,
    handleSwitchLoop,
    handleSwitchShuffle,
    handleVolume,
    infoModalVisible,
    internalErrorModalVisible,
    isMuted,
    isPlaying,
    loop,
    progress,
    queue,
    setInfoModalVisible,
    setInternalErrorModalVisible,
    setSettingsModalVisible,
    settingsModalVisible,
    showElapsedTime,
    showProgressBar,
    shuffle,
    switchElapsedTime,
    switchProgressBar,
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
   * Handle Internal Error modal closing
   * @returns {void}
   */
  const closeInternalErrorModal = useCallback(
    (): void => setInternalErrorModalVisible(false),
    [setInternalErrorModalVisible],
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
      <InternalErrorModal
        closeModal={closeInternalErrorModal}
        internalErrorModalVisible={internalErrorModalVisible}
      />
      <SettingsModal
        clearQueue={handleClearQueue}
        closeModal={closeSettingsModal}
        loop={loop}
        queue={queue}
        settingsModalVisible={settingsModalVisible}
        showElapsedTime={showElapsedTime}
        showProgressBar={showProgressBar}
        shuffle={shuffle}
        switchElapsedTime={switchElapsedTime}
        switchLoop={handleSwitchLoop}
        switchProgressBar={switchProgressBar}
        switchShuffle={handleSwitchShuffle}
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
        { showProgressBar && (
          <ProgressBar
            elapsed={elapsed}
            handleProgress={handleProgress}
            handleProgressSlidingStart={handleProgressSlidingStart}
            progress={progress}
            showElapsedTime={showElapsedTime}
            track={track}
          />
        ) }
        <PlaybackControls
          handleControls={handleControls}
          isPlaying={isPlaying}
          shuffle={shuffle}
        />
      </View>
    </View>
  );
};
