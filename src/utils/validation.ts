import { Alert } from "react-native";

export const validateLogin = (email : string , password : string) : boolean | void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if(!emailRegex.test(email)){
        Alert.alert('Invalid Email');
        return;
    }

    if(!passwordRegex.test(password)){
        Alert.alert('Invalid Password must include at least one uppercase ,lowecase and special character');
        return;
    }

    return true
}

export const validateRegister = (email : string , password : string ,confirmPassword: string) : boolean | void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if(!emailRegex.test(email)){
        Alert.alert('Invalid Email');
        return;
    }

    if(!passwordRegex.test(password)){
        Alert.alert('Invalid Password must include at least one uppercase ,lowecase and special character');
        return;
    }

    if(password !== confirmPassword){
        Alert.alert('Password don not match')
        return;
    }

    return true

}
