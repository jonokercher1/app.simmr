import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { MainTabsParamList } from '../AuthenticatedApp/AuthenticatedApp.types';

type CollaboratorsScreenProps = BottomTabScreenProps<MainTabsParamList, 'collaborators'>;

const CollaboratorsScreen: FC<CollaboratorsScreenProps> = () => (
  <AppScreen>
    <Text>Collaborators</Text>
  </AppScreen>
);

export default CollaboratorsScreen;
