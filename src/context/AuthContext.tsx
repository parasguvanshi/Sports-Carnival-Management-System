import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  saveUser,
  getUser,
  clearUser,
  getAllUsers,
  setLoggedInUser,
  updateUserRole,
  removeUser,
} from '../services/AuthStorage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { AuthContextType, UserData } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

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
      throw new Error(VALIDATE_MESSAGES.USER_NOT_EXIST);
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

  const deleteUser = async (email: string) => {
    await removeUser(email);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, setUserRole, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(VALIDATE_MESSAGES.CONTEXT);
  }

  return context;
};
