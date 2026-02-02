import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import styles from './forgotPasswordScreenStyle';
import Button from '../../components/button/Button';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { forgotPasswordViewModel } from '../../viewmodels/forgotPasswordViewModel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { logo } from '../../constant/imageConstant';

const ForgotPasswordScreen = () => {
  const {
    email,
    setEmail,
    handleSubmit,
    isButtonDisabled,
  } = forgotPasswordViewModel();

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
          <Text style={styles.headerText}>
            {STRINGCONSTANT.APP.RESET_PASSWORD}
          </Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>
            {STRINGCONSTANT.LABELS.EMAIL}
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder={STRINGCONSTANT.PLACEHOLDERS.EMAIL}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Button
          name={STRINGCONSTANT.BUTTONS.SUBMIT}
          onPress={handleSubmit}
          disabled={isButtonDisabled}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPasswordScreen;
