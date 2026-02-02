import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './userRoleScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../../theme/colorConstants';
import { userInfo } from '../../types/userRoleData';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { userRoleViewModel } from '../../viewmodels/userRoleViewModel';

type props = NativeStackScreenProps<RootStackParamList, 'UserRole'>;

const roles: userInfo[] = [
  {
    id: 2,
    title: STRINGCONSTANT.USER_INFO.TITLE_ORGANISER,
    icon: STRINGCONSTANT.USER_INFO.ICON_ORGANISER,
    description: STRINGCONSTANT.USER_INFO.DESCRIPTION_ORGANISER,
  },
  {
    id: 3,
    title: STRINGCONSTANT.USER_INFO.TITLE_PARTICIPANTS,
    icon: STRINGCONSTANT.USER_INFO.ICON_PARTICIPANTS,
    description: STRINGCONSTANT.USER_INFO.DESCRIPTION_PARTICIPANTS,
  },
];

const UserRoleScreen = ({ navigation, route }: props) => {
  const { email } = route.params;

  const {
    selectedRole,
    setSelectedRole,
    handleRegister,
    isButtonDisabled,
  } = userRoleViewModel(email, () => {
    navigation.replace('Login', {});
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{STRINGCONSTANT.USER_ROLE.SELECT_ROLE}</Text>
      <Text style={styles.subtitle}>{STRINGCONSTANT.USER_ROLE.CHOOSE_ROLE}</Text>

      {roles.map(role => (
        <TouchableOpacity
          key={role.id}
          style={[
            styles.card,
            selectedRole === role.id && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole(role.id)}
        >
          <Icon
            name={role.icon}
            size={STRINGCONSTANT.USER_ROLE.ICON_SIZE}
            color={color.color.background}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>{role.title}</Text>
          <Text style={styles.cardDescription}>
            {role.description}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.button,
          isButtonDisabled && styles.disabledButton,
        ]}
        disabled={isButtonDisabled}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          {STRINGCONSTANT.BUTTONS.REGISTER}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserRoleScreen;
