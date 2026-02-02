import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './userListItemStyle';
import { UserData } from '../../services/AuthStorage';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';
import { STRINGCONSTANT } from '../../constant/stringConstant';

type Props = {
  user: UserData;
  onDelete: (email: string) => void;
};

const UserListItem = ({ user, onDelete }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{user.role}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => onDelete(user.email)}
      >
        <Icon
          name={STRINGCONSTANT.ICON.DELETE}
          size={fonts.iconSize.sm}
          color={color.color.danger}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserListItem;
