import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './forgotPasswordScreenStyle';
import Button from '../../components/button/Button';
import { STRING } from '../../constant/stringConstant';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {};

  const isButtonDisabled: boolean = email.trim() === '';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputFieldContainer}>
        <Text style={styles.textLabel}>{STRING.LABELS.EMAIL}</Text>
        <TextInput
          style={styles.inputField}
          placeholder={STRING.PLACEHOLDERS.EMAIL}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View>
        <Button
          name={STRING.BUTTONS.SUBMIT}
          onPress={handleSubmit}
          disabled={isButtonDisabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
