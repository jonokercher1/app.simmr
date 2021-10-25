import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { ITEM_CARD_STATE } from '../ItemCard';
import { COLOUR } from '../../../utils/GlobalStyles/GlobalStyles';
import ItemCardAction, { ITEM_ACTION } from '../ItemCardAction/ItemCardAction';
import styles from './ItemCardActions.style';

interface ItemCardActionsProps {
  type: ITEM_CARD_STATE;
  onPressAction: (action: ITEM_ACTION) => void;
}

const ItemCardActions: FC<ItemCardActionsProps> = ({ type, onPressAction }) => {
  const componentInner = useMemo(() => {
    switch (type) {
      case ITEM_CARD_STATE.DEFAULT:
        return (
          <>
            <View style={styles.action}>
              <ItemCardAction
                onPress={onPressAction}
                action={ITEM_ACTION.DELETE}
              />
            </View>

            <ItemCardAction
              onPress={onPressAction}
              action={ITEM_ACTION.EDIT}
            />
          </>
        );

      case ITEM_CARD_STATE.EXPANDED:
        return (
          <>
            <View style={styles.action}>
              <ItemCardAction
                onPress={onPressAction}
                action={ITEM_ACTION.DELETE}
              />
            </View>

            <ItemCardAction
              onPress={onPressAction}
              action={ITEM_ACTION.PURCHASE}
            />
          </>
        );

      case ITEM_CARD_STATE.FOCUSED:
        return (
          <ItemCardAction
            onPress={onPressAction}
            action={ITEM_ACTION.PURCHASE}
            iconColour={COLOUR.SUCCESS}
          />
        );
    }
  }, [type, onPressAction]);

  return (
    <View style={styles.wrap}>
      {componentInner}
    </View>
  );
};

export default ItemCardActions;

