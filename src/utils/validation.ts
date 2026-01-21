import { validateMessages } from '../constant/validateMessages';
import { LoginPayload, RegisterPayload } from '../types/auth';

export const validateLogin = (payload: LoginPayload): string | true => {

  const { email, password } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!email){ 
    return validateMessages.REQUIRED_EMAIL;
  }

  if (!password) {
    return validateMessages.PASSWORD_REQUIRED;
  }

  if (!emailRegex.test(email)) {
    return validateMessages.INVALID_EMAIL;
  }

  if (!passwordRegex.test(password)){
    return validateMessages.INVALID_PASSWORD;
  }

  return true;
};

export const validateRegister = (payload: RegisterPayload): string | true => {

  const { name, email, password, confirmPassword } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!name) {
    return validateMessages.NAME_REQUIRED;
  }

  if (!email) {
    return validateMessages.REQUIRED_EMAIL;
  }

  if (!password) {
    return validateMessages.PASSWORD_REQUIRED;
  }

  if (!confirmPassword) {
    return validateMessages.CONFIRM_PASSWORD;
  }

  if (!emailRegex.test(email)) {
    return validateMessages.INVALID_EMAIL;
  }

  if (!passwordRegex.test(password)){
    return validateMessages.INVALID_PASSWORD;
  }

  if (password !== confirmPassword) {
    return validateMessages.PASSWORD_MISMATCH;
  }

  return true;
};
