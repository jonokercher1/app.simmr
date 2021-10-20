import React, { FC } from 'react';
import { ScrollView, KeyboardAvoidingView, StyleProp, ViewStyle } from 'react-native';
import styles from './KeyboardAvoidingScrollView.style';

interface KeyboardAvoidingScrollViewProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const KeyboardAvoidingScrollView: FC<KeyboardAvoidingScrollViewProps> = ({ children, style, contentContainerStyle }) => (
  <KeyboardAvoidingView
    style={[styles.wrapper, style]}
    behavior="padding"
    enabled
  >
    <ScrollView
      contentContainerStyle={[styles.scrollView, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
);

export default KeyboardAvoidingScrollView;
