import React from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import BigButton from '../../../components/BigButton';
import ModalWrap from '../../../components/ModalWrap';

import colors from '../../../constants/Colors';

interface SettingsModalProps {
  closeModal: () => void;
  settingsModalVisible: boolean;
  showElapsedTime: boolean;
  showProgressBar: boolean;
}

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
    marginBottom: 16,
    width: '80%',
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
  } = props;

  return (
    <ModalWrap visible={settingsModalVisible}>
      <Text style={styles.title}>
        Settings
      </Text>
      <View style={styles.row}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => null}
          value={showProgressBar}
        />
        <Text style={styles.rowText}>
          { `${showProgressBar ? 'Hide' : 'Show'} progress bar` }
        </Text>
      </View>
      <View style={styles.row}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => null}
          value={showElapsedTime}
        />
        <Text style={styles.rowText}>
          { `${showElapsedTime ? 'Hide' : 'Show'} elapsed time` }
        </Text>
      </View>
      <BigButton
        onPress={closeModal}
        text="CLOSE"
      />
    </ModalWrap>
  );
};
