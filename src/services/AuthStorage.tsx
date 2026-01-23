import AsyncStorage from '@react-native-async-storage/async-storage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';

const USER_KEY = 'APP_USER';
const LOGGED_IN_USER_KEY = 'LOGGED_IN_USER';

export type UserData = {
  name?: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  role?: 'admin' | 'organiser' | 'participant';
};

export const saveUser = async (user: UserData) => {
  const users = await getAllUsers();

  const exists = users.some(u => u.email === user.email);
  if (exists) {
    throw new Error(VALIDATE_MESSAGES.USER_ALREADY_EXIST);
  }

  const updatedUsers = [...users, user];

  await AsyncStorage.setItem(USER_KEY, JSON.stringify(updatedUsers));
};

export const setLoggedInUser = async (user: UserData) => {
  await AsyncStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
};

export const getUser = async (): Promise<UserData | null> => {
  const data = await AsyncStorage.getItem(LOGGED_IN_USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(LOGGED_IN_USER_KEY);
};

export const getAllUsers = async (): Promise<UserData[]> => {
  const data = await AsyncStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : [];
};

export const updateUserRole = async (email: string, role: UserData['role']) => {
  const users = await getAllUsers();

  const updatedUsers = users.map(user =>
    user.email === email ? { ...user, role } : user,
  );

  await AsyncStorage.setItem(USER_KEY, JSON.stringify(updatedUsers));
};
