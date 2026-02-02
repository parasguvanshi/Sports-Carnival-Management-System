import { Text, View, TextInput, Pressable, Image } from 'react-native';
import React from 'react';
import styles from './registerScreenStyle';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { registerViewModel } from '../../viewmodels/registerViewModel';
import { logo } from '../../constant/imageConstant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';

type props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: props) => {
  const {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleSignup,
    isButtonDisabled,
  } = registerViewModel((email: string) => {
    navigation.navigate('UserRole', { email });
  });

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
          <Text style={styles.headerText}>{STRINGCONSTANT.APP.START}</Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRINGCONSTANT.LABELS.NAME}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={STRINGCONSTANT.PLACEHOLDERS.NAME}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRINGCONSTANT.LABELS.EMAIL}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={STRINGCONSTANT.PLACEHOLDERS.EMAIL}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{STRINGCONSTANT.LABELS.PASSWORD}</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputField}
              secureTextEntry={!showPassword}
              placeholder={STRINGCONSTANT.PLACEHOLDERS.PASSWORD}
              value={password}
              onChangeText={setPassword}
            />

            <Pressable
              style={styles.eyeIcon}
              onPress={() => setShowPassword(prev => !prev)}
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

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>
            {STRINGCONSTANT.LABELS.CONFIRM_PASSWORD}
          </Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputField}
              secureTextEntry={!showConfirmPassword}
              placeholder={STRINGCONSTANT.PLACEHOLDERS.CONFIRM_PASSWORD}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <Pressable
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(prev => !prev)}
            >
              <Icon
                name={
                  showConfirmPassword
                    ? STRINGCONSTANT.ICON.VISIBILITY_OFF
                    : STRINGCONSTANT.ICON.VISIBILITY
                }
                size={fonts.iconSize.lg}
                color={color.color.background}
              />
            </Pressable>
          </View>
        </View>

        <Button
          name={STRINGCONSTANT.BUTTONS.NEXT}
          onPress={handleSignup}
          disabled={isButtonDisabled}
        />

        <View style={styles.loginTextContainer}>
          <Text>{STRINGCONSTANT.ACCOUNT.ALREADY_ACOOUNT}</Text>
          <Pressable onPress={() => navigation.navigate('Login', {})}>
            <Text> {STRINGCONSTANT.BUTTONS.LOGIN}</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
