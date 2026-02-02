import AsyncStorage from '@react-native-async-storage/async-storage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { STRINGCONSTANT } from '../constant/stringConstant';
import { UserData } from '../types/auth';

export const saveUser = async (user: UserData) => {
  const users = await getAllUsers();

  const exists = users.some(u => u.email === user.email);
  if (exists) {
    throw new Error(VALIDATE_MESSAGES.USER_ALREADY_EXIST);
  }

  const updatedUsers = [...users, user];

  await AsyncStorage.setItem(STRINGCONSTANT.KEY.USER_KEY, JSON.stringify(updatedUsers));
};

export const setLoggedInUser = async (user: UserData) => {
  await AsyncStorage.setItem(STRINGCONSTANT.KEY.LOGGED_IN_USER_KEY, JSON.stringify(user));
};

export const getUser = async (): Promise<UserData | null> => {
  const data = await AsyncStorage.getItem(STRINGCONSTANT.KEY.LOGGED_IN_USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(STRINGCONSTANT.KEY.LOGGED_IN_USER_KEY);
};

export const getAllUsers = async (): Promise<UserData[]> => {
  const data = await AsyncStorage.getItem(STRINGCONSTANT.KEY.USER_KEY);
  return data ? JSON.parse(data) : [];
};

export const updateUserRole = async (email: string, role: UserData['role']) => {
  const users = await getAllUsers();

  const updatedUsers = users.map(user =>
    user.email === email ? { ...user, role } : user,
  );

  await AsyncStorage.setItem(STRINGCONSTANT.KEY.USER_KEY, JSON.stringify(updatedUsers));
};

export const removeUser = async (email: string) => {
  const currentUser = await getUser();

  if (!currentUser || currentUser.role !== STRINGCONSTANT.ROLE.ADMIN) {
    throw new Error(VALIDATE_MESSAGES.ADMIN_DELETE_USER);
  }

  const users = await getAllUsers();
  const updatedUsers = users.filter(user => user.email !== email);

  await AsyncStorage.setItem(STRINGCONSTANT.KEY.USER_KEY, JSON.stringify(updatedUsers));
};

