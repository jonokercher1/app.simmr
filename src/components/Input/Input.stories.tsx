import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import Input from './Input';

storiesOf('Input', module)
  .add('Text', () => {
    const TestStory = () => {
      const { control } = useForm();
      return (
        <Input
          placeholder="Input Placeholder"
          name="input"
          control={control}
          onChangeText={action('text changed')}
        />
      );
    };

    return <TestStory />;
  });
