import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ItemCard, { ITEM_CARD_STATE } from './ItemCard';
import { View } from 'react-native';

storiesOf('ItemCard', module)
  .addDecorator((story) => (
    <View style={{ paddingHorizontal: 20 }}>{story()}</View>
  ))
  .add('Default', () => (
    <ItemCard
      state={ITEM_CARD_STATE.DEFAULT}
      item={{
        title: 'Item Title',
        quantity: '400g',
       }}
    />
  ))
  .add('Focused', () => (
    <ItemCard
      state={ITEM_CARD_STATE.FOCUSED}
      item={{
        title: 'Item Title',
        quantity: '400g',
       }}
    />
  ));
