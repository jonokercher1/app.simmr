import React from 'react';
import { TextInput } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import KeyboardAvoidingScrollView from './KeyboardAvoidingScrollView';

const generateList = (count: number) => {
  const inputs = [];
  for (let i = 0; i < count; i++) {
    inputs.push(
      <TextInput
        placeholder={`Input-${i}`}
      />
    );
  }

  return inputs;
};

storiesOf('KeyboardAvoidingScrollView', module)
  .add('Default', () => (
    <KeyboardAvoidingScrollView>
      {generateList(200)}
    </KeyboardAvoidingScrollView>
  ));
