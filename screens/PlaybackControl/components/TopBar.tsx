import React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import { Pressable, StyleSheet, View } from 'react-native';

import colors from '../../../constants/Colors';

interface TopBarProps {
  setInfoModalVisible: (value: boolean) => void;
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    width: '80%',
  },
});

const ICON_SIZE = 32;

export default (props: TopBarProps): JSX.Element => {
  const { setInfoModalVisible } = props;

  return (
    <View style={styles.view}>
      <Pressable onPress={() => setInfoModalVisible(true)}>
        <FontAwesome5
          color={colors.accent}
          name="info-circle"
          size={ICON_SIZE}
        />
      </Pressable>
      <Pressable>
        <Ionicons
          color={colors.accent}
          name="settings-sharp"
          size={ICON_SIZE}
        />
      </Pressable>
    </View>
  );
};
