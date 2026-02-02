import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { getAllUsers } from '../services/AuthStorage';
import { STRINGCONSTANT } from '../constant/stringConstant';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { UserData } from '../types/auth';

export const userManagementViewModel = () => {
  const { user, deleteUser } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);

  const isAdmin = user?.role === STRINGCONSTANT.ROLE.ADMIN;

  const fetchUsers = async () => {
    if (!isAdmin) {
      return;
    }

    const storedUsers = await getAllUsers();
    setUsers(storedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = (email: string) => {
    Alert.alert(
      VALIDATE_MESSAGES.DELETE_USER,
      VALIDATE_MESSAGES.CONFIRM_DELETE_USER,
      [
        { text: VALIDATE_MESSAGES.CANCLE, style: 'cancel' },
        {
          text: VALIDATE_MESSAGES.DELETE,
          style: 'destructive',
          onPress: async () => {
            await deleteUser(email);
            fetchUsers();
          },
        },
      ],
    );
  };

  return {
    users,
    isAdmin,
    handleDeleteUser,
  };
};
