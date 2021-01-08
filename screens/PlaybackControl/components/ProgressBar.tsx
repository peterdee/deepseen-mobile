import React from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../constants/Colors';
import formatTime from '../../../utilities/format-time';
import { Track } from '../types';

interface ProgressBarProps {
  elapsed: number;
  handleProgress: (value: number) => void;
  handleProgressSlidingStart: () => void;
  progress: number;
  showElapsedTime: boolean;
  track: Track;
};

const styles = StyleSheet.create({
  progress: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    width: '80%',
  },
  progressTimes: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressBar: {
    height: 40,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  times: {
    color: colors.textLight,
    fontSize: 16,
  },
});

export default (props: ProgressBarProps): JSX.Element => {
  const {
    elapsed,
    handleProgress,
    handleProgressSlidingStart,
    progress,
    showElapsedTime,
    track,
  } = props;

  return (
    <View style={styles.progress}>
      { !showElapsedTime && (
        <View style={styles.progressTimes}>
          <Text style={styles.times}>
            { formatTime(elapsed) }
          </Text>
          <Text style={styles.times}>
            { formatTime(track.duration) }
          </Text>
        </View>
      ) }
      <Slider
        minimumValue={0}
        maximumValue={200}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.textLight}
        onSlidingStart={handleProgressSlidingStart}
        onSlidingComplete={handleProgress}
        step={1}
        style={styles.progressBar}
        value={progress}
      />
    </View>
  );
};
