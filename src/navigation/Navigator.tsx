import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../views/loginscreen/LoginScreen'
import RegisterScreen from '../views/registerscreen/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRoleScreen from '../views/userrolescreen/UserRoleScreen'

export type RootStackParamList = {
  Login : {};
  Register : {};
  UserRole : {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName='Login' >
            <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Register"  component={RegisterScreen} options={{headerShown:false}}/>
            <Stack.Screen name="UserRole"  component={UserRoleScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
        
  )
}

export default Navigator