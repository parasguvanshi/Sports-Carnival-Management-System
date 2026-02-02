import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../views/loginscreen/LoginScreen';
import RegisterScreen from '../views/registerscreen/RegisterScreen';
import UserRoleScreen from '../views/userrolescreen/UserRoleScreen';
import ForgotPasswordScreen from '../views/forgotpassword/ForgotPasswordScreen';

export type AuthStackParamList = {
  Login: {};
  Register: {};
  UserRole: { email: string };
  ForgotPassword: {};
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="UserRole" component={UserRoleScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;

