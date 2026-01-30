import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  UserData,
  saveUser,
  getUser,
  clearUser,
  getAllUsers,
  setLoggedInUser,
  updateUserRole,
} from '../services/AuthStorage';
import { Alert } from 'react-native';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';

type AuthContextType = {
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (user: UserData) => Promise<void>;
  setUserRole: (email: string, role: UserData['role']) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>(null as any);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const login = async (email: string, password: string) => {
    const users = await getAllUsers();
    const existingUser = users.find(
      user => user.email === email && user.password === password,
    );

    if (!existingUser) {
      Alert.alert(VALIDATE_MESSAGES.USER_NOT_EXIST);
      return false;
    }

    await setLoggedInUser(existingUser);
    setUser(existingUser);
    return true;
  };

  const register = async (userData: UserData) => {
    await saveUser(userData);
  };

  const setUserRole = async (email: string, role: UserData['role']) => {
    await updateUserRole(email, role);
    return true;
  };

  const logout = async () => {
    await clearUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, setUserRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
