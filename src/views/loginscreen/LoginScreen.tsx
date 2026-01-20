import { View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';

import styles from './loginScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { loginViewModel } from '../../viewmodels/loginViewModel';

type props = NativeStackScreenProps<RootStackParamList , 'Login'>

const LoginScreen = ({navigation} : props) => {

  const [email, setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');

  const handleLogin = () => {
  const payload = {
    email,
    password,
  };

  const result = loginViewModel(payload);

  if (!result.success) {
    Alert.alert(result.message ?? 'Login failed');
    return;
  }

  Alert.alert('Login Successfully');
  navigation.navigate('UserRole', {});
};


  const isButtonDisabled : boolean = email.trim() === ''  || password.trim() === '';

  return (
  <KeyboardAwareScrollView
  contentContainerStyle={{ flexGrow: 1 }}
  style={styles.KeyboardBackground}
  enableOnAndroid
  keyboardShouldPersistTaps="handled"
  >

    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Hey,{'\n'} Welcome Back.</Text>
      </View>

      <View style={styles.inputFieldContainer}>

        <Text style={styles.labelText}>Email:</Text>
        <TextInput 
        value={email}
        style={styles.inputField}
        placeholder='Enter Your Email...'
        onChangeText={(prev)=>{
          setEmail(prev)
        }}/>

      </View>

      <View style={styles.inputFieldContainer}>

        <Text style={styles.labelText}>Password:</Text>

        <TextInput 
        value={password}
        style={styles.inputField} 
        secureTextEntry={true} 
        placeholder='Enter Your Password...'
        onChangeText={(prev)=>{
          setPassword(prev)
        }}/>

      </View>

      <View>
        <Button name='Login' onPress={handleLogin} disabled={isButtonDisabled} />
      </View>


      <View style={styles.textAlignmentContainer}>
        <Pressable
          onPress={()=>{
          }}  
          >
            <Text style={styles.forgotPasswordText}>Forgot Password ?  </Text>
        </Pressable>

        <View style={styles.signUpButtonText}>
        <Text>Don't have an account? </Text>  
        <Pressable
          onPress={()=>{
            navigation.navigate('Register',{})
          }}  
          >
            <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>  
          </View>

    </View>
    </KeyboardAwareScrollView>

  );
};

export default LoginScreen;
