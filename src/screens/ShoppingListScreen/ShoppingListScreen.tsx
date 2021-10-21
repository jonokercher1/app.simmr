import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { MainTabsParamList } from '../AuthenticatedApp/AuthenticatedApp.types';

type ShoppingListScreenProps = BottomTabScreenProps<MainTabsParamList, 'list'>;

const ShoppingListScreen: FC<ShoppingListScreenProps> = () => (
  <AppScreen>
    <Text>Shopping List</Text>
  </AppScreen>
);

export default ShoppingListScreen;
