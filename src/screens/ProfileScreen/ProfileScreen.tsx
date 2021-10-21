import React, { FC } from 'react';
import { Text } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { MainTabsParamList } from '../AuthenticatedApp/AuthenticatedApp.types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type ProfileScreenProps = BottomTabScreenProps<MainTabsParamList, 'profile'>;

const ProfileScreen: FC<ProfileScreenProps> = () => (
  <AppScreen>
    <Text>Profile</Text>
  </AppScreen>
);

export default ProfileScreen;
