import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { COLOUR } from '../../../utils/GlobalStyles/GlobalStyles';
import Icon from 'react-native-remix-icon';

export enum ITEM_ACTION {
  PURCHASE = 'PURCHASE',
  DELETE = 'DELETE',
  EDIT = 'EDIT'
}

interface ActionProps {
  action: ITEM_ACTION;
  iconColour?: COLOUR;
  onPress: (action: ITEM_ACTION) => void;
}

const ItemCardAction: FC<ActionProps> = ({ onPress, action, iconColour }) => {
  const iconName = useMemo(() => {
    switch (action) {
      case ITEM_ACTION.DELETE:
        return 'delete-bin-7-line';

      case ITEM_ACTION.EDIT:
        return 'pencil-line';

      case ITEM_ACTION.PURCHASE:
        return 'check-line';
    }
  }, [action]);

  return (
    <TouchableOpacity onPress={() => onPress(action)}>
      <Icon
        name={iconName}
        color={iconColour ?? COLOUR.DARK}
        size={22}
      />
    </TouchableOpacity>
  );
};

export default ItemCardAction;
