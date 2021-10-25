import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import ItemCardActions from './ItemCardActions';
import { ITEM_CARD_STATE } from '../ItemCard';

storiesOf('ItemCardActions', module)
  .add('Default', () => (
    <ItemCardActions
      type={ITEM_CARD_STATE.DEFAULT}
      onPressAction={action('action pressed')}
    />
  ))
  .add('Expanded', () => (
    <ItemCardActions
      type={ITEM_CARD_STATE.EXPANDED}
      onPressAction={action('action pressed')}
    />
  ))
  .add('Focused', () => (
    <ItemCardActions
      type={ITEM_CARD_STATE.FOCUSED}
      onPressAction={action('action pressed')}
    />
  ));
