import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';

import styles from './loginScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { loginViewModel } from '../../viewmodels/loginViewModel';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { useAuth } from '../../context/AuthContext';
import { STRING } from '../../constant/stringConstant';

type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };

    const result = loginViewModel(payload);

    if (!result.success) {
      Alert.alert(result.message ?? VALIDATE_MESSAGES.LOGIN_FAILED);
      return;
    }

    try {
      const success = await login(email, password);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };

  const isButtonDisabled: boolean =
    email.trim() === '' || password.trim() === '';

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.KeyboardcontentContainerStyle}
      style={styles.KeyboardBackground}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {STRING.APP.HEY}
            {'\n'}
            {STRING.APP.WELCOME}
          </Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.EMAIL}</Text>
          <TextInput
            value={email}
            style={styles.inputField}
            placeholder={STRING.PLACEHOLDERS.EMAIL}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.PASSWORD}</Text>

          <TextInput
            value={password}
            style={styles.inputField}
            secureTextEntry={true}
            placeholder={STRING.PLACEHOLDERS.PASSWORD}
            onChangeText={setPassword}
          />
        </View>

        <View>
          <Button
            name={STRING.BUTTONS.LOGIN}
            onPress={handleLogin}
            disabled={isButtonDisabled}
          />
        </View>

        <View style={styles.textAlignmentContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('ForgotPassword', {});
            }}
          >
            <Text style={styles.forgotPasswordText}>
              {STRING.LABELS.FORGOT_PASSWORD}
            </Text>
          </Pressable>

          <View style={styles.signUpButtonText}>
            <Text>{STRING.ACCOUNT.NO_ACCOUNT}</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Register', {});
              }}
            >
              <Text style={styles.buttonText}>{STRING.BUTTONS.SIGNUP}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
