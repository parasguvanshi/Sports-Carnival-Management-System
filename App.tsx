import React from 'react';
import Navigator from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import  Toast  from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <Navigator />
      <Toast/>
    </AuthProvider>
  );
};

export default App;
