import React, { FC } from 'react';
import { Text } from 'react-native';
import KeyboardAvoidingScrollView from '../../components/KeyboardAvoidingScrollView/KeyboardAvoidingScrollView';

const LoginScreen: FC = () => (
  <KeyboardAvoidingScrollView>
    <Text>Login</Text>
  </KeyboardAvoidingScrollView>
);

export default LoginScreen;
