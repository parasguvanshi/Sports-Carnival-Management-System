import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import styles from './teamRegistrationScreenStyle';
import { teamRegistrationViewModel } from '../../viewmodels/teamRegistrationViewModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStackNavigator';
import { STRINGCONSTANT } from '../../constant/stringConstant';

type props = NativeStackScreenProps<AppStackParamList, 'TeamRegistration'>;

const TeamRegistrationScreen = ({ route }: props) => {
  const { eventId } = route.params;

  const {
    activeFormat,
    setActiveFormat,
    name,
    setName,
    phone,
    setPhone,
    gender,
    setGender,
    handleSubmit,
  } = teamRegistrationViewModel(eventId);

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.TEAM_REGISTRATION} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.tabContainer}>
          {STRINGCONSTANT.ARRAY.FORMAT.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeFormat === tab && styles.activeTab]}
              onPress={() => setActiveFormat(tab as any)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeFormat === tab && styles.activeTabText,
                ]}
              >
                {tab === STRINGCONSTANT.TAB.ivi
                  ? STRINGCONSTANT.TAB.IvsI
                  : STRINGCONSTANT.TAB.IIvsII}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            {STRINGCONSTANT.LABELS.PLAYER_DETAILS}
          </Text>

          <TextInput
            placeholder={STRINGCONSTANT.PLACEHOLDERS.NAME}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder={STRINGCONSTANT.PLACEHOLDERS.PHONE_NUMBER}
            style={styles.input}
            keyboardType={STRINGCONSTANT.KEYBOARD_TYPE.PHONE_PAD}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>{STRINGCONSTANT.LABELS.GENDER}</Text>
          <View style={styles.genderContainer}>
            {STRINGCONSTANT.ARRAY.GENDER.map(g => (
              <TouchableOpacity
                key={g}
                style={[
                  styles.genderChip,
                  gender === g && styles.genderChipActive,
                ]}
                onPress={() => setGender(g)}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === g && styles.genderTextActive,
                  ]}
                >
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>
              {STRINGCONSTANT.BUTTONS.REGISTER}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamRegistrationScreen;
