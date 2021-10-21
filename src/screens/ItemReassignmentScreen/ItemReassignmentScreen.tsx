import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { AuthStackParamList } from '../AuthenticatedApp/AuthenticatedApp.types';

type ItemReassignmentScreenProps = StackScreenProps<AuthStackParamList, 'itemReassignment'>;

const ItemReassignmentScreen: FC<ItemReassignmentScreenProps> = () => (
  <AppScreen>
    <Text>Item Reassignment</Text>
  </AppScreen>
);

export default ItemReassignmentScreen;
