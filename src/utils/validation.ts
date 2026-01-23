import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { LoginPayload, RegisterPayload } from '../types/auth';

export const validateLogin = (payload: LoginPayload): string | true => {
  const { email, password } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!email) {
    return VALIDATE_MESSAGES.REQUIRED_EMAIL;
  }

  if (!password) {
    return VALIDATE_MESSAGES.PASSWORD_REQUIRED;
  }

  if (!emailRegex.test(email)) {
    return VALIDATE_MESSAGES.INVALID_EMAIL;
  }

  if (!passwordRegex.test(password)) {
    return VALIDATE_MESSAGES.INVALID_PASSWORD;
  }

  return true;
};

export const validateRegister = (payload: RegisterPayload): string | true => {
  const { name, email, password, confirmPassword } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!name) {
    return VALIDATE_MESSAGES.NAME_REQUIRED;
  }

  if (!email) {
    return VALIDATE_MESSAGES.REQUIRED_EMAIL;
  }

  if (!password) {
    return VALIDATE_MESSAGES.PASSWORD_REQUIRED;
  }

  if (!confirmPassword) {
    return VALIDATE_MESSAGES.CONFIRM_PASSWORD;
  }

  if (!emailRegex.test(email)) {
    return VALIDATE_MESSAGES.INVALID_EMAIL;
  }

  if (!passwordRegex.test(password)) {
    return VALIDATE_MESSAGES.INVALID_PASSWORD;
  }

  if (password !== confirmPassword) {
    return VALIDATE_MESSAGES.PASSWORD_MISMATCH;
  }

  return true;
};
