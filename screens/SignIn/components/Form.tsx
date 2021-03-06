import React from 'react';
import { Text, TextInput, View } from 'react-native';

import colors from '../../../constants/Colors';
import { FormProps } from '../types';
import { styles } from '../styles';

import BigButton from '../../../components/BigButton';
import LinkButton from '../../../components/LinkButton';
import Loader from '../../../components/Loader';

export const formInputs = {
  email: {
    name: 'email',
    placeholder: 'Email',
  },
  password: {
    name: 'password',
    placeholder: 'Password',
  },
};

/**
 * Sign In form component
 * @param {FormProps} props - component props
 * @returns {JSX.Element}
 */
export default (props: FormProps): JSX.Element => {
  const {
    email,
    error,
    handleInput,
    handleRecovery,
    handleSignUp,
    handleSubmit,
    loading,
    password,
  } = props;

  return (
    <View style={styles.container}>
      { loading && (
        <Loader />
      ) }
      { !loading && (
        <View style={styles.container}>
          <Text style={styles.title}>
            SIGN IN
          </Text>
          <TextInput
            autoCapitalize="none"
            editable={!loading}
            keyboardType="email-address"
            onChangeText={(value) => handleInput(formInputs.email.name, value)}
            placeholder={formInputs.email.placeholder}
            placeholderTextColor={colors.inputPlaceholder}
            style={[styles.input, loading ? styles.inputDisabled : null]}
            value={email}
          />
          <TextInput
            autoCapitalize="none"
            editable={!loading}
            onChangeText={(value) => handleInput(formInputs.password.name, value)}
            placeholder={formInputs.password.placeholder}
            placeholderTextColor={colors.inputPlaceholder}
            secureTextEntry
            style={[styles.input, loading ? styles.inputDisabled : null]}
            value={password}
          />
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              { !loading && error ? error : '' }
            </Text>
          </View>
          <BigButton
            disabled={loading}
            onPress={handleSubmit}
            text="SUBMIT"
          />
          <LinkButton
            disabled={loading}
            onPress={handleRecovery}
            text="Forgot password?"
          />
          <LinkButton
            disabled={loading}
            onPress={handleSignUp}
            text="Don't have an account?"
          />
        </View>
      ) }
    </View>
  );
};
