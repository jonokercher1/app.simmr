import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ScreenHeader from './ScreenHeader';
import { action } from '@storybook/addon-actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

storiesOf('ScreenHeader', module)
  .add('Default - no action', () => (
    <ScreenHeader
      title="Screen Header"
    />
  ))
  .add('Default - action', () => {
    const ActionComponent = () => (
      <TouchableOpacity onPress={action('pressed action')}>
        <Icon
          name="check-line"
          size={22}
          color={COLOUR.NEUTRAL_DARK}
        />
      </TouchableOpacity>
    );

    return (
      <ScreenHeader
        title="Screen Header"
        rightAction={<ActionComponent />}
      />
    );
  });
