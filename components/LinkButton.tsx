import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/Colors';

interface LinkButtonProps {
  buttonStyle?: object;
  disabled?: boolean;
  onPress: (event: any) => any;
  text: string;
  textStyle?: object;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginHorizontal: 'auto',
    padding: 0,
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 16,
  },
  buttonTextDisabled: {
    color: colors.tabIconInactive,
  },
});

export default (props: LinkButtonProps): JSX.Element => {
  const {
    disabled = false,
    onPress,
    text,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={styles.button}
    >
      <Text
        style={[
          styles.buttonText,
          disabled ? styles.buttonTextDisabled : null,
        ]}
      >
        { text }
      </Text>
    </Pressable>
  );
};
