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
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App: FC = () => {
  const authContext = useContext(AuthContext);

  if (Config.NODE_ENV === 'storybook') {
    return <StorybookUIRoot />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authContext.user ? (
          <Stack.Screen
            name="home"
            component={HomeScreen}
          />
        ) : (
          <Stack.Screen
            name="login"
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>

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
