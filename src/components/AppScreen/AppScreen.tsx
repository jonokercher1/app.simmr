import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import KeyboardAvoidingScrollView from '../KeyboardAvoidingScrollView/KeyboardAvoidingScrollView';
import styles from './AppScreen.style';

const AppScreen: FC = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingScrollView style={styles.inner}>
      {children}
    </KeyboardAvoidingScrollView>
  </SafeAreaView>
);

export default AppScreen;
