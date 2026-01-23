import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../../navigation/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './userRoleScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../../theme/colorConstants';
import { roleType, userInfo } from '../../types/userRoleData';
import { useAuth } from '../../context/AuthContext';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { STRING } from '../../constant/stringConstant';

type props = NativeStackScreenProps<RootStackParamList, 'UserRole'>;

const roles: userInfo[] = [
  {
    id: 1,
    title: STRING.USER_INFO.DESCRIPTION_ADMIN,
    icon: STRING.USER_INFO.ICON_ADMIN,
    description: STRING.USER_INFO.DESCRIPTION_ADMIN,
  },
  {
    id: 2,
    title: STRING.USER_INFO.TITLE_ORGANISER,
    icon: STRING.USER_INFO.ICON_ORGANISER,
    description: STRING.USER_INFO.DESCRIPTION_ORGANISER,
  },
  {
    id: 3,
    title: STRING.USER_INFO.TITLE_PARTICIPANTS,
    icon: STRING.USER_INFO.ICON_PARTICIPANTS,
    description: STRING.USER_INFO.DESCRIPTION_PARTICIPANTS,
  },
];

const UserRoleScreen = ({ navigation, route }: props) => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const { setUserRole } = useAuth();
  const { email } = route.params;

  const handleRegister = async () => {
    if (!selectedRole) {
      return;
    }

    const role = roleType[selectedRole as 1 | 2 | 3];
    const result = await setUserRole(email, role);

    if (result) {
      Alert.alert(VALIDATE_MESSAGES.REGISTRATION_SUCCESS);
      navigation.replace('Login', {});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{STRING.USER_ROLE.SELECT_ROLE}</Text>
      <Text style={styles.subtitle}>{STRING.USER_ROLE.CHOOSE_ROLE}</Text>

      {roles.map(role => (
        <TouchableOpacity
          key={role.id}
          style={[styles.card, selectedRole === role.id && styles.selectedCard]}
          onPress={() => setSelectedRole(role.id)}
        >
          <Icon
            name={role.icon}
            size={STRING.USER_ROLE.ICON_SIZE}
            color={color.color.background}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>{role.title}</Text>
          <Text style={styles.cardDescription}>{role.description}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, !selectedRole && styles.disabledButton]}
        disabled={!selectedRole}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>{STRING.BUTTONS.REGISTER}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserRoleScreen;
