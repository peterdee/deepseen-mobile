import React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import { styles } from '../../Account/styles';

import formatTrackName from '../../../utilities/format-track-name';
import { InfoModalProps } from '../types';

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
            fontSize: 32,
            marginBottom: 16,
          }}
        >
          { formatTrackName(track.name) }
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
