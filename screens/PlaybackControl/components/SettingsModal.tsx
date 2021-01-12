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
  clearQueue: () => void;
  closeModal: () => void;
  loop: boolean;
  queue: number | string;
  settingsModalVisible: boolean;
  showElapsedTime: boolean;
  showProgressBar: boolean;
  shuffle: boolean;
  switchElapsedTime: () => void;
  switchLoop: () => void;
  switchProgressBar: () => void;
  switchShuffle: () => void;
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
  separator: {
    backgroundColor: colors.textLight,
    height: 1,
    marginBottom: 24,
    width: '80%',
  },
  clearButton: {
    marginBottom: 24,
  },
});

export default (props: SettingsModalProps): JSX.Element => {
  const {
    clearQueue,
    closeModal,
    loop,
    queue,
    settingsModalVisible,
    showElapsedTime,
    showProgressBar,
    shuffle,
    switchElapsedTime,
    switchLoop,
    switchProgressBar,
    switchShuffle,
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
            Progress bar
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
            Elapsed time
          </Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Switcher
          onChange={switchLoop}
          value={loop}
        />
        <Pressable
          onPress={switchLoop}
          style={styles.rowPressable}
        >
          <Text style={styles.rowText}>
            Loop playlist
          </Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Switcher
          onChange={switchShuffle}
          value={shuffle}
        />
        <Pressable
          onPress={switchShuffle}
          style={styles.rowPressable}
        >
          <Text style={styles.rowText}>
            Shuffle playlist
          </Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.rowText}>
          { `Queued tracks: ${queue}` }
        </Text>
      </View>
      <BigButton
        buttonStyle={styles.clearButton}
        disabled={queue === 0}
        onPress={clearQueue}
        text="CLEAR QUEUE"
      />
      <BigButton
        onPress={closeModal}
        text="CLOSE"
      />
    </ModalWrap>
  );
};
