import React from 'react';
import { Alert, Modal, Text } from 'react-native';

import { InfoModalProps } from '../types';

export const InfoModal = (props: InfoModalProps): JSX.Element => {
  const {
    infoModalVisible,
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={infoModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <Text style={{ color: 'white' }}>
        This is visible
      </Text>
    </Modal>
  );
};
