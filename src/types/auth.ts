export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthResult = {
  success: boolean;
  message?: string;
};

export type UserData = {
  name: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  role?: 'admin' | 'organiser' | 'participant';
};

export type AuthContextType = {
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (user: UserData) => Promise<void>;
  setUserRole: (email: string, role: UserData['role']) => Promise<boolean>;
  deleteUser: (email: string) => Promise<void>;
};
