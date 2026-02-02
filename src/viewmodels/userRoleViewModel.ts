import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { roleType } from '../types/userRoleData';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const userRoleViewModel = (email: string, onSuccess: () => void) => {
  const { setUserRole } = useAuth();
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const isButtonDisabled = !selectedRole;

  const handleRegister = async () => {
    if (!selectedRole) {
      return;
    }

    try {
      const role = roleType[selectedRole as keyof typeof roleType];
      const result = await setUserRole(email, role);

      if (result) {
        ToastService.success(
          STRINGCONSTANT.TOAST.SUCCESS,
          VALIDATE_MESSAGES.REGISTRATION_SUCCESS,
        );
        onSuccess();
      }
    } catch (error) {
      if (error instanceof Error) {
        ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
      }
    }
  };
  return {
    selectedRole,
    isButtonDisabled,
    setSelectedRole,
    handleRegister,
  };
};
