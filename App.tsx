import 'react-native-gesture-handler';
import React, { FC, useContext } from 'react';
import StorybookUIRoot from './storybook';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import ToastManager from './src/utils/ToastManager/ToastManager';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import AuthenticatedApp from './src/screens/AuthenticatedApp/AuthenticatedApp';
import { AppTheme } from './src/utils/GlobalStyles/GlobalStyles';

export type MainTabsParamList = {
  authenticatedApp: undefined;
  login: undefined;
  register: undefined;
};

const RootStack = createStackNavigator<MainTabsParamList>();
const queryClient = new QueryClient();

const App: FC = () => {
  const authContext = useContext(AuthContext);

  if (Config.NODE_ENV === 'storybook') {
    return <StorybookUIRoot />;
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
         }}
      >
        {!authContext.user ? (
          <RootStack.Screen
            name="authenticatedApp"
            component={AuthenticatedApp}
          />
        ) : (
          <>
            <RootStack.Screen
              name="login"
              component={LoginScreen}
            />
            <RootStack.Screen
              name="register"
              component={RegisterScreen}
            />
          </>
        )}
      </RootStack.Navigator>

      <ToastManager />
    </NavigationContainer>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);
