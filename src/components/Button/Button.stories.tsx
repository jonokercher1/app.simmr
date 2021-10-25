import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('default', () => (
    <Button
      state="PRIMARY"
      onPress={action('button press')}
      buttonText="Button Text"
    />
  ))
  .add('secondary', () => (
    <Button
      state="SECONDARY"
      onPress={action('button press')}
      buttonText="Button Text"
    />
  ));
