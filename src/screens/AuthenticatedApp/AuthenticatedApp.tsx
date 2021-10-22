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
import Icon from 'react-native-remix-icon';
import TabBar from '../../components/TabBar/TabBar';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

const AuthStack = createStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

const AppTabs: FC = () => (
  <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
    initialRouteName="list"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="shoppingTripHolder"
      component={ShoppingTripScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="shopping-basket-2-line"
            color={color ?? COLOUR.NEUTRAL_MID}
            size={size}
          />
        ),
       }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('shoppingTrip');
        },
      })}
    />
    <Tab.Screen
      name="collaborators"
      component={CollaboratorsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="user-add-line"
            color={color ?? COLOUR.NEUTRAL_MID}
            size={size}
          />
        ),
       }}
    />
    <Tab.Screen
      name="list"
      component={ShoppingListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="home-2-line"
            color={color ?? COLOUR.NEUTRAL_MID}
            size={size}
          />
        ),
       }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="tools-fill"
            color={color ?? COLOUR.NEUTRAL_MID}
            size={size}
          />
        ),
       }}
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
