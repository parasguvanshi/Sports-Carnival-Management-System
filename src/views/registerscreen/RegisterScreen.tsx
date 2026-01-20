import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';

import styles from './registerScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerViewModel } from '../../viewmodels/registerViewModel';

type props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = () => {
    const payload = {
      name,
      email,
      password,
      confirmPassword,
    }

    const result = registerViewModel(payload);

    if (!result.success) {
      Alert.alert(result.message ?? 'Registration failed');
      return;
    }
    
    Alert.alert('Register Successfully');
    navigation.navigate('Login', {});
  };

  const isButtonDisabled: boolean =
    email.trim() === '' ||
    password.trim() === '' ||
    name.trim() === '' ||
    confirmPassword.trim() === '';

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.KeyboardBackground}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Let's {'\n'} Get Started. </Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Your Full Name..."
            value={name}
            onChangeText={prev => {
              setName(prev);
            }}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>Email:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Your Email..."
            value={email}
            onChangeText={prev => {
              setEmail(prev);
            }}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>Password:</Text>

          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder="Enter Your Password..."
            value={password}
            onChangeText={prev => {
              setPassword(prev);
            }}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>Confirm Password:</Text>

          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder="Enter Your Confirm Password..."
            value={confirmPassword}
            onChangeText={prev => {
              setConfirmPassword(prev);
            }}
          />
        </View>

        <View>
          <Button
            name="Sign Up"
            onPress={handleSignup}
            disabled={isButtonDisabled}
          />
        </View>

        <View style={styles.loginTextContainer}>
          <Text>Already have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Login', {});
            }}
          >
            <Text> Login</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
