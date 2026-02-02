import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';

import styles from './loginScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { loginViewModel } from '../../viewmodels/loginViewModel';
import { Image } from 'react-native';
import { logo } from '../../constant/imageConstant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

type props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    showPassword,
    setShowPassword,
    isButtonDisabled,
  } = loginViewModel();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.KeyboardcontentContainerStyle}
      style={styles.KeyboardBackground}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.innerImageContainer}>
            <Image source={logo.LOGO} style={styles.image} />
          </View>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{STRINGCONSTANT.APP.WELCOME}</Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRINGCONSTANT.LABELS.EMAIL}</Text>
          <TextInput
            value={email}
            style={styles.inputField}
            placeholder={STRINGCONSTANT.PLACEHOLDERS.EMAIL}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRINGCONSTANT.LABELS.PASSWORD}</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              style={styles.inputField}
              secureTextEntry={!showPassword}
              placeholder={STRINGCONSTANT.PLACEHOLDERS.PASSWORD}
              onChangeText={setPassword}
            />

            <Pressable
              onPress={() => setShowPassword(prev => !prev)}
              style={styles.eyeIcon}
            >
              <Icon
                name={
                  showPassword
                    ? STRINGCONSTANT.ICON.VISIBILITY_OFF
                    : STRINGCONSTANT.ICON.VISIBILITY
                }
                size={fonts.iconSize.lg}
                color={color.color.background}
              />
            </Pressable>
          </View>
        </View>

        <Pressable onPress={() => navigation.navigate('ForgotPassword', {})}>
          <Text style={styles.forgotPasswordText}>
            {STRINGCONSTANT.LABELS.FORGOT_PASSWORD}
          </Text>
        </Pressable>

        <Button
          name={STRINGCONSTANT.BUTTONS.LOGIN}
          onPress={handleLogin}
          disabled={isButtonDisabled}
        />

        <View style={styles.signUpButtonText}>
          <Text>{STRINGCONSTANT.ACCOUNT.NO_ACCOUNT}</Text>
          <Pressable onPress={() => navigation.navigate('Register', {})}>
            <Text style={styles.buttonText}>
              {STRINGCONSTANT.BUTTONS.SIGNUP}
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
