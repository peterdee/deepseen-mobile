import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BigButton from '../../../components/BigButton';
import ModalWrap from '../../../components/ModalWrap';
import Switcher from '../../../components/Switcher';

import colors from '../../../constants/Colors';

interface SettingsModalProps {
  closeModal: () => void;
  settingsModalVisible: boolean;
  showElapsedTime: boolean;
  showProgressBar: boolean;
  switchElapsedTime: () => void;
  switchProgressBar: () => void;
};

const styles = StyleSheet.create({
  title: {
    color: colors.textLight,
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'center',
    width: '80%',
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 24,
    width: '80%',
  },
  rowPressable: {
    marginLeft: 16,
  },
  rowText: {
    color: colors.textLight,
    fontSize: 16,
  },
});

export default (props: SettingsModalProps): JSX.Element => {
  const {
    closeModal,
    settingsModalVisible,
    showElapsedTime,
    showProgressBar,
    switchElapsedTime,
    switchProgressBar,
  } = props;

  return (
    <ModalWrap visible={settingsModalVisible}>
      <Text style={styles.title}>
        Settings
      </Text>
      <View style={styles.row}>
        <Switcher
          onChange={switchProgressBar}
          value={showProgressBar}
        />
        <Pressable
          onPress={switchProgressBar}
          style={styles.rowPressable}
        >
          <Text style={styles.rowText}>
            { `${showProgressBar ? 'Hide' : 'Show'} progress bar` }
          </Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Switcher
          disabled={!showProgressBar}
          onChange={switchElapsedTime}
          value={showElapsedTime}
        />
        <Pressable
          disabled={!showProgressBar}
          onPress={switchElapsedTime}
          style={styles.rowPressable}
        >
          <Text style={styles.rowText}>
            { `${showElapsedTime ? 'Hide' : 'Show'} elapsed time` }
          </Text>
        </Pressable>
      </View>
      <BigButton
        onPress={closeModal}
        text="CLOSE"
      />
    </ModalWrap>
  );
};
