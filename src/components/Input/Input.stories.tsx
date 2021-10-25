import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import Input from './Input';

storiesOf('Input', module)
  .add('Text - Default', () => {
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
  })
  .add('Text - Minimal', () => {
    const TestStory = () => {
      const { control } = useForm();
      return (
        <Input
          styleType="MINIMAL"
          placeholder="Input Placeholder"
          name="input"
          control={control}
          onChangeText={action('text changed')}
        />
      );
    };

    return <TestStory />;
  })
  .add('Text - Error', () => {
    const TestStory = () => {
      const { control } = useForm();
      return (
        <Input
          placeholder="Input Placeholder"
          name="input"
          control={control}
          error={{
            type: 'required',
            message: 'Form Error',
           }}
          onChangeText={action('text changed')}
        />
      );
    };

    return <TestStory />;
  })
  .add('Password', () => {
    const TestStory = () => {
      const { control } = useForm();
      return (
        <Input
          placeholder="*****************"
          name="input"
          control={control}
          secureTextEntry
          onChangeText={action('text changed')}
        />
      );
    };

    return <TestStory />;
  });
