import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { AuthStackParamList } from '../AuthenticatedApp/AuthenticatedApp.types';

type ShoppingTripScreenProps = StackScreenProps<AuthStackParamList, 'shoppingTrip'>;

const ShoppingTripScreen: FC<ShoppingTripScreenProps> = () => (
  <AppScreen>
    <Text>Shopping Trip</Text>
  </AppScreen>
);

export default ShoppingTripScreen;
