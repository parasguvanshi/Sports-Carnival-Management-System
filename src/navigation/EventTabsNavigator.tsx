import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import EventScreen from '../views/eventscreen/EventScreen';
import DashBoardScreen from '../views/dashboardscreen/DashBoardScreen';
import { color } from '../theme/colorConstants';

export type BottomTabParamList = {
  DashBoardScreen: {};
  EventScreen: {};
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const EventTabsNavigator = () => {
  const { user } = useAuth();

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{
          title: 'Dashboard',
        }}
      />

      <Tab.Screen
        name="EventScreen" component={EventScreen} options={{ title: 'All events'}}
      />
    </Tab.Navigator>
  );
};

export default EventTabsNavigator;
