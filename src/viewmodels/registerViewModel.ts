import { AuthResult, RegisterPayload } from "../types/auth";
import { validateRegister } from "../utils/validation";

export const registerViewModel = (payload: RegisterPayload): AuthResult => {

  const validation = validateRegister(payload);

  if (validation !== true) {
    return { 
        success: false, 
        message: validation 
    };
  }
  
  return { 
    success: true 
};
};
