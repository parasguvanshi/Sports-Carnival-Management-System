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
import CreateEventScreen from '../views/createeventscreen/CreateEventScreen';
import EditEventScreen from '../views/editeventscreen/EditEventScreen';
import { eventInfo } from '../types/eventsData';
import EventTabsNavigator from './EventTabsNavigator';
import UserManagementScreen from '../views/usermanagementscreen/UserManagementScreen';
import TeamRegistrationScreen from '../views/teamregistrationscreen/TeamRegistrationScreen';
import TeamListingScreen from '../views/teamlistingscreen/TeamListingScreen';

import DrawerNavigator from './DrawerNavigator';

export type RootStackParamList = {
  Login: {};
  ForgotPassword: {};
  Register: {};
  UserRole: { email: string };
  EventTabs: {};
  EventDetails: { event: eventInfo };
  CreateEvent: {};
  EditEvent: { eventId: number };
  UserManagement : {};
  TeamRegistration : {eventId : number};
  TeamListing : {};
 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
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
            {/* <Stack.Screen name="Drawer" component={DrawerNavigator} /> */}
            <Stack.Screen name="EventTabs" component={EventTabsNavigator} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
            <Stack.Screen name="EditEvent" component={EditEventScreen} />
            <Stack.Screen name="UserManagement" component={UserManagementScreen} />
            <Stack.Screen name="TeamRegistration" component={TeamRegistrationScreen} />
            <Stack.Screen name="TeamListing" component={TeamListingScreen} />
       
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
