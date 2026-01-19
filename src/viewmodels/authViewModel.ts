import { Alert } from "react-native"
import { validateLogin, validateRegister } from "../utils/validation";

export const authViewModel = () => {

    const login = (email : string,password :string)  : void | boolean => {
        if(!email){
            Alert.alert('Email is required');
            return;
        }

        if(!password){
            Alert.alert('Password is required');
            return;
        }
        const msg = validateLogin(email ,password);
        return msg;
    }

    const register = (name : string, email : string , password : string ,confirmPassword : string) : boolean | void => {
         if(!name){
            Alert.alert('Name is required');
            return;
        }

        if(!email){
            Alert.alert('Email is required');
            return;
        }
         if(!password){
            Alert.alert('Password is required');
            return;
        }

        if(!confirmPassword){
            Alert.alert('Confirm Password is required');
            return;
        }
        const msg = validateRegister(email,password,confirmPassword);
        return msg;
    }

    return {
        login , register
    }
}