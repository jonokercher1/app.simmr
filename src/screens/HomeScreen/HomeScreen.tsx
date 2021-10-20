import React, { FC } from 'react';
import { Text } from 'react-native';
import KeyboardAvoidingScrollView from '../../components/KeyboardAvoidingScrollView/KeyboardAvoidingScrollView';

const HomeScreen: FC = () => (
  <KeyboardAvoidingScrollView>
    <Text>Home</Text>
  </KeyboardAvoidingScrollView>
);

export default HomeScreen;
