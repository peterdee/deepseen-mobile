import React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';

import formatDate from '../../../utilities/format-date';
import formatSize from '../../../utilities/format-size';
import formatTime from '../../../utilities/format-time';
import formatTrackName from '../../../utilities/format-track-name';
import { InfoModalProps } from '../types';
import { styles } from '../styles';

export const InfoModal = (props: InfoModalProps): JSX.Element => {
  const {
    closeModal,
    infoModalVisible,
    track,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={infoModalVisible}
    >
      <View style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: .9,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 32,
            textAlign: 'center',
            width: '80%',
          }}
        >
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
        <Pressable
          onPress={closeModal}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            CLOSE
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};
