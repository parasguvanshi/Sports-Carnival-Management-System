import { LoginPayload, RegisterPayload } from '../types/auth';

export const validateLogin = (payload: LoginPayload): string | true => {

  const { email, password } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!email){ 
    return 'Email is required';
  }

  if (!password) {
    return 'Password is required';
  }

  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }

  if (!passwordRegex.test(password)){
    return 'Invalid password: must include uppercase, number, and special character';
  }

  return true;
};

export const validateRegister = (payload: RegisterPayload): string | true => {

  const { name, email, password, confirmPassword } = payload;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!name) {
    return 'Name is required';
  }

  if (!email) {
    return 'Email is required';
  }

  if (!password) {
    return 'Password is required';
  }

  if (!confirmPassword) {
    return 'Confirm password is required';
  }

  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }

  if (!passwordRegex.test(password)){
    return 'Invalid password: must include uppercase, number, and special character';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  return true;
};
