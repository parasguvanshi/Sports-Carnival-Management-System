import { useState } from 'react';
import { RegisterPayload } from '../types/auth';
import { validateRegister } from '../utils/validation';
import { useAuth } from '../context/AuthContext';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const registerViewModel = (onSuccess: (email: string) => void) => {
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isButtonDisabled =
    name.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    confirmPassword.trim() === '';

  const handleSignup = async () => {
    const payload: RegisterPayload = {
      name,
      email,
      password,
      confirmPassword,
    };

    const validation = validateRegister(payload);

    if (validation !== true) {
      ToastService.error(STRINGCONSTANT.TOAST.ERROR, validation);
      return;
    }

    try {
      await register({ name, email, password });
      onSuccess(email);
    } catch (error) {
      if (error instanceof Error) {
        ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
      }
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    isButtonDisabled,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleSignup,
  };
};
