import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EventTabsNavigator from './EventTabsNavigator';
import UserManagementScreen from '../views/usermanagementscreen/UserManagementScreen';

export type DrawerParamList = {
  EventTabs: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Drawer.Screen
        name="EventTabs"
        component={EventTabsNavigator}
        options={{ title: 'Home' }}
      />

      <Drawer.Screen
        name="Profile"
        component={UserManagementScreen}
        options={{ title: 'Profile' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator
