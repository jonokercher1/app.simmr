import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { AuthStackParamList } from '../AuthenticatedApp/AuthenticatedApp.types';

type UpsertItemScreenProps = StackScreenProps<AuthStackParamList, 'upsertItem'>;

const UpsertItemScreen: FC<UpsertItemScreenProps> = () => (
  <AppScreen>
    <Text>Shopping Trip</Text>
  </AppScreen>
);

export default UpsertItemScreen;
