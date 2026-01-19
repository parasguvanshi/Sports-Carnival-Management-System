import { View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';

import styles from './loginScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { authViewModel } from '../../viewmodels/authViewModel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type props = NativeStackScreenProps<RootStackParamList , 'Login'>

const LoginScreen = ({navigation} : props) => {

  const [email, setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const {login } = authViewModel();

  const handleLogin = () => {
     
    const loginMsg = login(email,password);

    setEmail('');
    setPassword('')

    if(loginMsg){
      Alert.alert('Login Successfully');
      navigation.navigate('UserRole');
    }
  }

  return (
  <KeyboardAwareScrollView
  contentContainerStyle={{ flexGrow: 1 }}
  style={styles.KeyboardBackground}
  enableOnAndroid
  keyboardShouldPersistTaps="handled"
  >

    <View style={styles.viewContainer}>

      <View style={styles.header}>
        <Text style={styles.headerText}> Hey,{'\n'} Welcome Back.</Text>
      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Email:</Text>
        <TextInput 
        value={email}
        style={styles.inputBox}
        placeholder='Enter Your Email...'
        onChangeText={(prev)=>{
          setEmail(prev)
        }}/>

      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Password:</Text>

        <TextInput 
        value={password}
        style={styles.inputBox} 
        secureTextEntry={true} 
        placeholder='Enter Your Password...'
        onChangeText={(prev)=>{
          setPassword(prev)
        }}/>

      </View>

      <View>
        <Button name='Login' onPress={handleLogin}/>
      </View>

      <Pressable
          onPress={()=>{
          }}  
          >
            <Text style={styles.forgotText}>Forgot Password ?  
        </Text>
      </Pressable>

        <Pressable
          onPress={()=>{
            navigation.navigate('Register')
          }}  
          >
            <Text style={styles.buttonText}>Don't have an account ? Sign up  
        </Text>
        </Pressable>

    </View>
    </KeyboardAwareScrollView>

  );
};

export default LoginScreen;
