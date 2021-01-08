import React from 'react';
import { StyleSheet, Text } from 'react-native';

import BigButton from '../../../components/BigButton';
import ModalWrap from '../../../components/ModalWrap';

import colors from '../../../constants/Colors';
import formatDate from '../../../utilities/format-date';
import formatSize from '../../../utilities/format-size';
import formatTime from '../../../utilities/format-time';
import formatTrackName from '../../../utilities/format-track-name';
import { InfoModalProps } from '../types';

const styles = StyleSheet.create({
  trackTitle: {
    color: colors.textLight,
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'center',
    width: '80%',
  },
});

export const InfoModal = (props: InfoModalProps): JSX.Element => {
  const {
    closeModal,
    infoModalVisible,
    track,
  } = props;

  return (
    <ModalWrap visible={infoModalVisible}>
      <Text style={styles.trackTitle}>
        { formatTrackName(track.name) }
      </Text>
      <Text style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 16,
            width: '80%',
          }}
        >
          { `Duration: ${formatTime(track.duration)}` }
        </Text>
        <Text style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 16,
            width: '80%',
          }}
        >
          { `Path: ${track.path}` }
        </Text>
        <Text style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 16,
            width: '80%',
          }}
        >
          { `Size: ${formatSize(track.size)}` }
        </Text>
        <Text style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 32,
            width: '80%',
          }}
        >
          { `Added: ${formatDate(track.added)}` }
        </Text>
        <BigButton
          onPress={closeModal}
          text="CLOSE"
        />
    </ModalWrap>
  );
};
