import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Avatar from '../Avatar/Avatar';
import Body from '../Typography/Body/Body';
import Icon from 'react-native-remix-icon';
import styles from './CollaboratorItem.style';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

export enum COLLABORATOR_ACTION {
  CREATE = 'create',
  DELETE = 'delete'
}

interface CollaboratorItemProps {
  collaborator?: {
    name?: string;
    email: string; // todo: replace with collaborator api type
  };
  onPressAction: (action: COLLABORATOR_ACTION) => void;
}

const CollaboratorItem: FC<CollaboratorItemProps> = ({ collaborator, onPressAction }) => {
  const { control, getValues } = useForm();

  const shouldCreate = useMemo(() => {
    return collaborator?.email ? false : true;
  }, [collaborator]);

  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        <Avatar
          size="SMALL"
          name={collaborator?.name ?? collaborator?.email ?? getValues('email')}
        />

        <View style={styles.nameWrap}>
          {shouldCreate ? (
            <Input
              name="email"
              styleType="MINIMAL"
              placeholder="enter name or email"
              control={control}
            />
          ) : (
            <Body>{collaborator?.name ?? collaborator?.email}</Body>
          )}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onPressAction(shouldCreate ? COLLABORATOR_ACTION.CREATE : COLLABORATOR_ACTION.DELETE)}
      >
        {shouldCreate ? (
          <Icon
            name="add-circle-line"
            size={22}
            color={COLOUR.NEUTRAL_DARK}
          />
        ) : (
          <Icon
            name="delete-bin-7-line"
            size={22}
            color={COLOUR.NEUTRAL_DARK}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CollaboratorItem;
