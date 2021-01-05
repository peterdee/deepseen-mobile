import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

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
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}
      >
        <Text style={{
            backgroundColor: 'black',
            color: 'white',
            fontSize: 32,
          }}
        >
          Modal is visible
        </Text>
        <Pressable onPress={closeModal}>
          <Text style={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: 32,
            }}
          >
            Close
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};
