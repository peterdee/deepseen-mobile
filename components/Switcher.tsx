import React from 'react';
import { Switch } from 'react-native';

import colors from '../constants/Colors';

interface SwitcherProps {
  disabled?: boolean;
  onChange: () => void;
  value: boolean;
};

export default (props: SwitcherProps): JSX.Element => {
  const {
    disabled = false,
    onChange,
    value,
  } = props;

  return (
    <Switch
      disabled={disabled}
      ios_backgroundColor={colors.switcherTrack}
      onValueChange={onChange}
      thumbColor={disabled ? colors.switcherThumbDisabled : colors.switcherThumb}
      trackColor={{
        false: colors.switcherTrack,
        true: colors.accent,
      }}
      value={value}
    />
  );
};
