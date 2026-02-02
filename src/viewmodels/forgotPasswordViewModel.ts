import { useState } from "react"


export const forgotPasswordViewModel = () =>{
    const[email,setEmail] = useState('');

    const isButtonDisabled = email.trim() === '';

    const handleSubmit = () : void => {

    }

    return {
        email,
        setEmail,
        handleSubmit,
        isButtonDisabled
    }
}