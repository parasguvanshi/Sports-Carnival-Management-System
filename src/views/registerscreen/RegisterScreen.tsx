import {Text, View,TextInput, Pressable, Alert} from 'react-native'
import React, { useState } from 'react'

import styles from './registerScreenStyle'
import Button from '../../components/button/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { authViewModel } from '../../viewmodels/authViewModel'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type props = NativeStackScreenProps<RootStackParamList , 'Register'>

const RegisterScreen = ({navigation} : props) => {
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const [confirmPassword , setConfirmPassword] = useState<string>('');

  const {register} = authViewModel();

  const handleSignup = () =>{

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    const isRegister = register(name, email,password ,confirmPassword);
    if(isRegister){
      Alert.alert('Register Successfully');
      navigation.navigate('Login');
    }
  }

  return (
  <KeyboardAwareScrollView
  contentContainerStyle={{ flexGrow: 1}}
  style={styles.KeyboardBackground}
  enableOnAndroid
  keyboardShouldPersistTaps="handled"
  
>
    
    <SafeAreaView>

    <View style={styles.viewContainer}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Let's </Text>
        <Text style={styles.headerText}> Get Started. </Text>
      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Name:</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder='Enter Your Full Name...'
        value={name}
        onChangeText={(prev)=>{
          setName(prev)
        }}/>

      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Email:</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder='Enter Your Email...'
        value={email}
        onChangeText={(prev)=>{
          setEmail(prev)
        }}/>

      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Password:</Text>

        <TextInput 
        style={styles.inputBox} 
        secureTextEntry={true} 
        placeholder='Enter Your Password...'
        value={password}
        onChangeText={(prev)=>{
          setPassword(prev)
        }}/>

      </View>

      <View style={styles.viewBox}>

        <Text style={styles.textBox}>Confirm Password:</Text>

        <TextInput 
        style={styles.inputBox} 
        secureTextEntry={true} 
        placeholder='Enter Your Confirm Password...'
        value={confirmPassword}
        onChangeText={(prev)=>{
          setConfirmPassword(prev)
        }}/>

      </View>

      <View>
        <Button name="Sign Up" onPress={handleSignup}/>
      </View>

      <Pressable
          onPress={()=>{
            navigation.navigate('Login')
          }}  
          >
            <Text style={styles.buttonText}>Already have an account ? Login</Text>
        </Pressable>
    </View>
    </SafeAreaView>

  </KeyboardAwareScrollView>

    
  )
}

export default RegisterScreen

