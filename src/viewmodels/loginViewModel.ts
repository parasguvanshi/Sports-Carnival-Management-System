import { useState } from 'react';
import { LoginPayload } from '../types/auth';
import { validateLogin } from '../utils/validation';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { useAuth } from '../context/AuthContext';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const loginViewModel = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword ,setShowPassword] = useState(false);

  const isButtonDisabled =
    email.trim() === '' || password.trim() === '';

  const handleLogin = async () => {
    const payload: LoginPayload = {
      email,
      password,
    };

    const validation = validateLogin(payload);

    if (validation !== true) {
      ToastService.error(STRINGCONSTANT.TOAST.ERROR,validation);
      return;
    }

    try {
       const success = await login(email, password);

       if(success){
         ToastService.success(STRINGCONSTANT.TOAST.SUCCESS,VALIDATE_MESSAGES.LOGIN_SUCCESS)
       }
    } catch (error) {
      if (error instanceof Error) {
        ToastService.error(STRINGCONSTANT.TOAST.ERROR,error.message)
      }
    }
  };

  return {
    email,
    password,
    isButtonDisabled,
    setEmail,
    setPassword,
    handleLogin,
    showPassword,
    setShowPassword,
  };
};
