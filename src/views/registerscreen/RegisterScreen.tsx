import { Text, View, TextInput, Pressable, Alert, Keyboard } from 'react-native';
import React, { useState } from 'react';
import styles from './registerScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerViewModel } from '../../viewmodels/registerViewModel';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { useAuth } from '../../context/AuthContext';
import { STRING } from '../../constant/stringConstant';

type props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useAuth();

  const handleSignup = async () => {
    const payload = {
      name,
      email,
      password,
      confirmPassword,
    };

    const result = registerViewModel(payload);

    if (!result.success) {
      Alert.alert(result.message ?? VALIDATE_MESSAGES.REGISTRATION_FAILED);
      return;
    }

    try {
      await register({ name, email, password });
      navigation.navigate('UserRole', { email });
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };

  const isButtonDisabled: boolean = email.trim() === '' || password.trim() === '' || name.trim() === '' || confirmPassword.trim() === '';

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
            {STRING.APP.LETS} {'\n'} {STRING.APP.START}
          </Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.NAME}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={STRING.PLACEHOLDERS.NAME}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.EMAIL}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={STRING.PLACEHOLDERS.EMAIL}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.PASSWORD}</Text>

          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder={STRING.PLACEHOLDERS.PASSWORD}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRING.LABELS.CONFIRM_PASSWORD}</Text>

          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder={STRING.PLACEHOLDERS.CONFIRM_PASSWORD}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View>
          <Button
            name={STRING.BUTTONS.NEXT}
            onPress={handleSignup}
            disabled={isButtonDisabled}
          />
        </View>

        <View style={styles.loginTextContainer}>
          <Text>{STRING.ACCOUNT.ALREADY_ACOOUNT}</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Login', {});
            }}
          >
            <Text> {STRING.BUTTONS.LOGIN}</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
