import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import AppStackNavigator from './AuthStackNavigator';
import AuthStackNavigator from './AppStackNavigator';

const Navigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
