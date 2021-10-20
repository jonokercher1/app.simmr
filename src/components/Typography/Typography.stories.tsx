import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Heading from './Heading/Heading';
import Body from './Body/Body';

storiesOf('Typography', module)
  .add('Heading', () => <Heading>Main App Heading</Heading>)
  .add('Body', () => <Body>Main App Body</Body>);
