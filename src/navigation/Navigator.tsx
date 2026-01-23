import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/loginscreen/LoginScreen';
import RegisterScreen from '../views/registerscreen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserRoleScreen from '../views/userrolescreen/UserRoleScreen';
import EventScreen from '../views/eventscreen/EventScreen';
import ForgotPasswordScreen from '../views/forgotpassword/ForgotPasswordScreen';
import { useAuth } from '../context/AuthContext';
import EventDetailsScreen from '../views/eventdetailsscreen/EventDetailsScreen';
import CreateEventScreen from '../views/createscreen/CreateEventScreen';
import EditEventScreen from '../views/editeventscreen/EditEventScreen';
import { eventInfo } from '../types/eventsData';

export type RootStackParamList = {
  Login: {};
  ForgotPassword: {};
  Register: {};
  UserRole: { email: string };
  EventScreen: {};
  EventDetails: { event: eventInfo };
  CreateEvent: {};
  EditEvent: { eventId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="UserRole" component={UserRoleScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
            <Stack.Screen name="EditEvent" component={EditEventScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
