import React from 'react';
import { StyleSheet, Text } from 'react-native';

import BigButton from '../../../components/BigButton';
import ModalWrap from '../../../components/ModalWrap';

import colors from '../../../constants/Colors';
import formatDate from '../../../utilities/format-date';
import formatSize from '../../../utilities/format-size';
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
  sectionTitle: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
    width: '80%',
  },
  sectionText: {
    color: colors.textLight,
    fontSize: 16,
    marginBottom: 16,
    width: '80%',
  },
});

export default (props: InfoModalProps): JSX.Element => {
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
      <Text style={styles.sectionTitle}>
        Added:
      </Text>
      <Text style={styles.sectionText}>
        { formatDate(track.added) }
      </Text>
      <Text style={styles.sectionTitle}>
        Size:
      </Text>
      <Text style={styles.sectionText}>
        { formatSize(track.size) }
      </Text>
      <Text style={styles.sectionTitle}>
        Path:
      </Text>
      <Text style={[
          styles.sectionText,
          {
            marginBottom: 32,
          },
        ]}
      >
        { track.path }
      </Text>
      <BigButton
        onPress={closeModal}
        text="CLOSE"
      />
    </ModalWrap>
  );
};
