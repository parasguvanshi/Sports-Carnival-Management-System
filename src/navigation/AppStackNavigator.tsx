import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventTabsNavigator from './EventTabsNavigator';
import EventDetailsScreen from '../views/eventdetailsscreen/EventDetailsScreen';
import CreateEventScreen from '../views/createeventscreen/CreateEventScreen';
import EditEventScreen from '../views/editeventscreen/EditEventScreen';
import UserManagementScreen from '../views/usermanagementscreen/UserManagementScreen';
import TeamRegistrationScreen from '../views/teamregistrationscreen/TeamRegistrationScreen';
import TeamListingScreen from '../views/teamlistingscreen/TeamListingScreen';
import { eventInfo } from '../types/eventsData';

export type AppStackParamList = {
  EventTabs: {};
  EventDetails: { event: eventInfo };
  CreateEvent: {};
  EditEvent: { eventId: number };
  UserManagement: {};
  TeamRegistration: { eventId: number };
  TeamListing: {};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EventTabs" component={EventTabsNavigator} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="EditEvent" component={EditEventScreen} />
      <Stack.Screen name="UserManagement" component={UserManagementScreen} />
      <Stack.Screen name="TeamRegistration" component={TeamRegistrationScreen} />
      <Stack.Screen name="TeamListing" component={TeamListingScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;