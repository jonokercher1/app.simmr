import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import Avatar from './Avatar';
import { TextInput } from 'react-native';

storiesOf('Avatar', module)
  .add('Small - no name', () => (
    <Avatar
      size="SMALL"
    />
  ))
  .add('Small - name', () => (
    <Avatar
      size="SMALL"
      name="test name"
    />
  ))
  .add('Large - no name', () => (
    <Avatar
      size="LARGE"
    />
  ))
  .add('Large - name', () => (
    <Avatar
      size="LARGE"
      name="test name"
    />
  ))
  .add('Large - custom', () => {
    const TestComponent = () => {
      const [name, setName] = useState('test name');

      return (
        <>
        <TextInput
          value={name}
          onChangeText={setName}
        />

          <Avatar
            size="LARGE"
            name={name}
          />
        </>
      );
    };

    return <TestComponent />;
  });
