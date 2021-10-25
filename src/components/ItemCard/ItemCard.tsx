import React, { FC } from 'react';
import { View } from 'react-native';
import { FONT_SIZE } from '../../utils/GlobalStyles/GlobalStyles';
import Heading from '../Typography/Heading/Heading';
import SubText from '../Typography/SubText/SubText';
import styles from './ItemCard.style';
import ItemCardActions from './ItemCardActions/ItemCardActions';

export enum ITEM_CARD_STATE {
  DEFAULT = 'DEFAULT',
  FOCUSED = 'FOCUSED',
  EXPANDED = 'EXPANDED',
}

interface ItemCardProps {
  item: any;
  state: ITEM_CARD_STATE;
}

const ItemCard: FC<ItemCardProps> = ({ item, state }) => (
  <View style={[styles.wrap, (styles as any)[state.toLowerCase()]]}>
    <View>
      <Heading fontSize={FONT_SIZE.SUB_HEADING}>{item.title}</Heading>
      <SubText style={styles.quantity}>Quantity: {item.quantity}</SubText>
    </View>

    <ItemCardActions
      type={state}
      onPressAction={console.log}
    />
  </View>
);

export default ItemCard;
