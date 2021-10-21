import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UpsertItemScreen from '../UpsertItemScreen/UpsertItemScreen';
import ShoppingTripScreen from '../ShoppingTripScreen/ShoppingTripScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemReassignmentScreen from '../ItemReassignmentScreen/ItemReassignmentScreen';
import ShoppingListScreen from '../ShoppingListScreen/ShoppingListScreen';
import CollaboratorsScreen from '../CollaboratorsScreen/CollaboratorsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { MainTabsParamList, AuthStackParamList } from './AuthenticatedApp.types';

const AuthStack = createStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

const AppTabs: FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="list"
      component={ShoppingListScreen}
    />
    <Tab.Screen
      name="collaborators"
      component={CollaboratorsScreen}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

const AuthenticatedApp: FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Group>
      <AuthStack.Screen
        name="tabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
    </AuthStack.Group>

    <AuthStack.Group
      screenOptions={{ presentation: 'modal', headerShown: false }}
    >
      <AuthStack.Screen
        name="upsertItem"
        component={UpsertItemScreen}
      />
      <AuthStack.Screen
        name="shoppingTrip"
        component={ShoppingTripScreen}
      />
      <AuthStack.Screen
        name="itemReassignment"
        component={ItemReassignmentScreen}
      />
    </AuthStack.Group>
  </AuthStack.Navigator>
);

export default AuthenticatedApp;
