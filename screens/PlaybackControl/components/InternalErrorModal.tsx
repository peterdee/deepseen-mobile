import React from 'react';
import { StyleSheet, Text } from 'react-native';

import BigButton from '../../../components/BigButton';
import ModalWrap from '../../../components/ModalWrap';

import colors from '../../../constants/Colors';

interface SettingsModalProps {
  closeModal: () => void;
  internalErrorModalVisible: boolean;
};

const styles = StyleSheet.create({
  title: {
    color: colors.error,
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'center',
    width: '80%',
  },
  text: {
    color: colors.error,
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    width: '80%',
  },
});

export default (props: SettingsModalProps): JSX.Element => {
  const { closeModal, internalErrorModalVisible } = props;

  return (
    <ModalWrap visible={internalErrorModalVisible}>
      <Text style={styles.title}>
        Oops!
      </Text>
      <Text style={styles.text}>
        Something went wrong
      </Text>
      <BigButton
        buttonStyle={{ borderColor: colors.error }}
        onPress={closeModal}
        text="CLOSE"
        textStyle={{ color: colors.error }}
      />
    </ModalWrap>
  );
};
