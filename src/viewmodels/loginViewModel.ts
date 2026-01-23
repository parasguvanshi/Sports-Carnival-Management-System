import { LoginPayload, AuthResult } from '../types/auth';
import { validateLogin } from '../utils/validation';

export const loginViewModel = (payload: LoginPayload): AuthResult => {
  const validation = validateLogin(payload);

  if (validation !== true) {
    return {
      success: false,
      message: validation,
    };
  }
  return {
    success: true,
  };
};
