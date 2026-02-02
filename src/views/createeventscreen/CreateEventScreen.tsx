import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/header/Header';
import styles from './createEventScreenStyle';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { eventImage } from '../../constant/imageConstant';
import { color } from '../../theme/colorConstants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { createEventViewModel } from '../../viewmodels/createEventViewModel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fonts } from '../../theme/fontsConstants';

type props = NativeStackScreenProps<RootStackParamList, 'CreateEvent'>;

const CreateEventScreen = ({ navigation }: props) => {
  const {
    title,
    setTitle,
    date,
    setDate,
    time,
    setTime,
    format,
    setFormat,
    slot1v1,
    setSlot1v1,
    slot2v2,
    setSlot2v2,
    matchType,
    setMatchType,
    description,
    setDescription,
    imageKey,
    setImageKey,
    handleCreateEvent,
     showDatePicker,
    setShowDatePicker,
    showTimePicker,
    setShowTimePicker,
    showSlotDropdown,
    setShowSlotDropdown,

    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
  } = createEventViewModel(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.CREATE_EVENT} />

      <ScrollView contentContainerStyle={styles.inputContainerList}>
      
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.EVENT_TITLE}</Text>
          <TextInput
            placeholder={STRINGCONSTANT.PLACEHOLDERS.EVENT_TITLE}
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.EVENT_DATE}</Text>
          <TouchableOpacity
            style={[styles.input, styles.iconInput]}
            onPress={() => {
              setTempDate(date ? new Date(date) : new Date());
              setShowDatePicker(true);
            }}
          >
            <Text style={{ color: date ? color.text.textPrimary : color.text.textGrey }}>
              {date || STRINGCONSTANT.PLACEHOLDERS.EVENT_DATE}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.CALENDER} size={fonts.iconSize.lg} color={color.text.textPrimary} />
          </TouchableOpacity>

          <Modal
            visible={showDatePicker}
            transparent
            animationType="slide"
            onRequestClose={() => setShowDatePicker(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  value={tempDate || new Date()}
                  mode="date"
                  display="spinner"
                  onChange={(event, selectedDate) => {
                    if (selectedDate) setTempDate(selectedDate);
                  }}
                />

                <TouchableOpacity
                  style={styles.time}
                  onPress={() => {
                    setDate(tempDate?.toISOString().split('T')[0] || '');
                    setShowDatePicker(false);
                  }}
                >
                  <Text style={styles.doneButton}>{STRINGCONSTANT.BUTTONS.DONE}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.EVENT_TIME}</Text>
          <TouchableOpacity
            style={[styles.input, styles.iconInput]}
            onPress={() => {
              setTempTime(time ? new Date(`1970-01-01T${time}:00`) : new Date());
              setShowTimePicker(true);
            }}
          >
            <Text style={{ color: time ? color.text.textPrimary : color.text.textGrey }}>
              {time || STRINGCONSTANT.PLACEHOLDERS.EVENT_TIME}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.ACCESS_TIME} size={fonts.iconSize.lg} color={color.text.textPrimary} />
          </TouchableOpacity>

          <Modal
            visible={showTimePicker}
            transparent
            animationType="slide"
            onRequestClose={() => setShowTimePicker(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  value={tempTime || new Date()}
                  mode="time"
                  display="spinner"
                  onChange={(event, selectedTime) => {
                    if (selectedTime) setTempTime(selectedTime);
                  }}
                />
                <TouchableOpacity
                  style={styles.time}
                  onPress={() => {
                    if (tempTime) {
                      const hours = tempTime.getHours();
                      const minutes = tempTime.getMinutes();
                      setTime(
                        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
                      );
                    }
                    setShowTimePicker(false);
                  }}
                >
                  <Text style={styles.doneButton}>{STRINGCONSTANT.BUTTONS.DONE}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.FORMAT}</Text>

          <View style={styles.formatSlotRow}>
            <TouchableOpacity
              style={format === STRINGCONSTANT.TAB.ivi ? styles.formatButtonSelected : styles.formatButton}
              onPress={() => setFormat('1v1')}
            >
              <Text style={{ color: format === STRINGCONSTANT.TAB.ivi ? color.text.textSecondary : color.text.textPrimary }}>
                {STRINGCONSTANT.TAB.IvsI}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.slotDropdownButton}
              onPress={() => setShowSlotDropdown(true)}
            >
              <Text style={{ color: slot1v1 ? color.text.textPrimary : color.text.textGrey }}>
                {slot1v1 || STRINGCONSTANT.LABELS.SELECT_SLOT}
              </Text>
              <Icon name={STRINGCONSTANT.ICON.ARROW_DOWN} size={fonts.iconSize.xl} color={color.text.textPrimary} />
            </TouchableOpacity>
          </View>

          <View style={styles.formatSlotRow}>
            <TouchableOpacity
              style={format === STRINGCONSTANT.TAB.iivii ? styles.formatButtonSelected : styles.formatButton}
              onPress={() => setFormat('2v2')}
            >
              <Text style={{ color: format === STRINGCONSTANT.TAB.iivii ? color.text.textSecondary : color.text.textPrimary }}>
                {STRINGCONSTANT.TAB.IIvsII}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.slotDropdownButton}
              onPress={() => setShowSlotDropdown(true)}
            >
              <Text style={{ color: slot2v2 ? color.text.textPrimary : color.text.textGrey }}>
                {slot2v2 || STRINGCONSTANT.LABELS.SELECT_SLOT}
              </Text>
              <Icon name={STRINGCONSTANT.ICON.ARROW_DOWN} size={fonts.iconSize.xl} color={color.text.textPrimary} />
            </TouchableOpacity>
          </View>

          <Modal
            visible={showSlotDropdown}
            transparent
            animationType="fade"
            onRequestClose={() => setShowSlotDropdown(false)}
          >
            <TouchableOpacity
              style={styles.dropdownOverlay}
              onPress={() => setShowSlotDropdown(false)}
            >
              <View style={styles.dropdown}>
                <FlatList
                  data={STRINGCONSTANT.ARRAY.SLOTOPTIONS}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        format === STRINGCONSTANT.TAB.ivi
                          ? setSlot1v1(item.toString())
                          : setSlot2v2(item.toString());
                        setShowSlotDropdown(false);
                      }}
                    >
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.MATCH_TYPE}</Text>
          <View style={styles.formatSlotRow}>
            <TouchableOpacity
              style={matchType === STRINGCONSTANT.LABELS.KNOCKOUT  ? styles.formatButtonSelected : styles.formatButton}
              onPress={() => setMatchType('roundrobin')}
            >
              <Text style={{ color: matchType === STRINGCONSTANT.LABELS.KNOCKOUT  ? color.text.textSecondary : color.text.textPrimary }}>
                {STRINGCONSTANT.LABELS.ROUNDROBIN}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={matchType === STRINGCONSTANT.LABELS.KNOCKOUT ? styles.formatButtonSelected : styles.formatButton}
              onPress={() => setMatchType('knockout')}
            >
              <Text style={{ color: matchType === STRINGCONSTANT.LABELS.KNOCKOUT ? color.text.textSecondary : color.text.textPrimary }}>
                {STRINGCONSTANT.LABELS.KNOCKOUT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.EVENT_IMAGE}</Text>
          <View style={styles.imageContainer}>
            {Object.keys(eventImage).map((key) => (
              <TouchableOpacity
                key={key}
                onPress={() => setImageKey(key as any)}
                style={imageKey === key ? styles.keyContainerOptional : styles.keyContainer}
              >
                <Text style={{ color: imageKey === key ? color.color.buttonBackground : color.color.background }}>
                  {key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

 
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.DESCRIPTION}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            placeholder={STRINGCONSTANT.PLACEHOLDERS.DESCRIPTION}
            onChangeText={setDescription}
            multiline
            numberOfLines={STRINGCONSTANT.APP.LINES4}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
        <Text style={styles.createButtonText}>{STRINGCONSTANT.BUTTONS.CREATE_EVENT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
