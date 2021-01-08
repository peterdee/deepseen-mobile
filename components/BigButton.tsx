import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/Colors';

interface BigButtonProps {
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
    borderColor: colors.accent,
    borderRadius: 5,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: '80%',
  },
  buttonDisabled: {
    borderColor: colors.accentMuted,
  },
  buttonText: {
    color: colors.accent,
    fontSize: 16,
  },
  buttonTextDisabled: {
    color: colors.accentMuted,
  },
});

export default (props: BigButtonProps): JSX.Element => {
  const {
    buttonStyle = null,
    disabled = false,
    onPress,
    text,
    textStyle = null,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : null,
        buttonStyle,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          disabled ? styles.buttonTextDisabled : null,
          textStyle,
        ]}
      >
        { text }
      </Text>
    </Pressable>
  );
};
