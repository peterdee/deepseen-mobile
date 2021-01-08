import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import colors from '../constants/Colors';

interface ModalWrapProps {
  children?: any;
  visible: boolean;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .9,
  },
});

export default (props: ModalWrapProps): JSX.Element => {
  const { children, visible } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={styles.view}>
        { children }
      </View>
    </Modal>
  );
};
