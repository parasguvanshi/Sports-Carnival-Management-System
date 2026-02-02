import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './logoutButtonStyle';
import { useAuth } from '../../context/AuthContext';
import { VALIDATE_MESSAGES} from '../../constant/validateConstant';
import { STRINGCONSTANT } from '../../constant/stringConstant';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      VALIDATE_MESSAGES.LOGOUT,
      VALIDATE_MESSAGES.CONFIRM_LOGOUT,
      [
        { text: VALIDATE_MESSAGES.CANCLE, style: 'cancel' },
        {
          text: VALIDATE_MESSAGES.LOGOUT,
          style: 'destructive',
          onPress: () => {
            logout();
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
        <Text style={styles.buttonText}>{STRINGCONSTANT.BUTTONS.LOGOUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
