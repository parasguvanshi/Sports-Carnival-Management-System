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
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/header/Header';
import styles from './editEventScreenStyle';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { color } from '../../theme/colorConstants';
import { editEventViewModel } from '../../viewmodels/editEventViewModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { fonts } from '../../theme/fontsConstants';

type Props = NativeStackScreenProps<RootStackParamList, 'EditEvent'>;

const EditEventScreen = ({ route, navigation }: Props) => {
  const { eventId } = route.params;
  const {
    title,
    setTitle,
    date,
    setDate,
    time,
    setTime,
    slot1v1,
    setSlot1v1,
    slot2v2,
    setSlot2v2,
    description,
    setDescription,
    handleEditEvent,
    showDatePicker,
    setShowDatePicker,
    showTimePicker,
    setShowTimePicker,
    showSlotDropdown,
    setShowSlotDropdown,
    activeSlotType,
    setActiveSlotType,
    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
  } = editEventViewModel(eventId, navigation);

 

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.EDIT_EVENT} />
      <ScrollView contentContainerStyle={styles.inputContainerList}>
    
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.EVENT_TITLE}</Text>
          <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        </View>

     
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Event Date</Text>
          <TouchableOpacity
            style={[styles.input, styles.iconInput]}
            onPress={() => {
              setTempDate(date ? new Date(date) : new Date());
              setShowDatePicker(true);
            }}
          >
            <Text style={{ color: date ? color.text.textPrimary : color.text.textGrey }}>
              {date}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.CALENDER} size={fonts.iconSize.lg} color={color.text.textPrimary} />
          </TouchableOpacity>

   
          <Modal transparent visible={showDatePicker} animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  value={tempDate || new Date()}
                  mode="date"
                  display="spinner"
                  onChange={(_, selectedDate) => selectedDate && setTempDate(selectedDate)}
                />
                <TouchableOpacity
                  style={styles.Modal}
                  onPress={() => {
                    if (tempDate) {
                      const yyyy = tempDate.getFullYear();
                      const mm = String(tempDate.getMonth() + 1).padStart(2, '0');
                      const dd = String(tempDate.getDate()).padStart(2, '0');
                      setDate(`${yyyy}-${mm}-${dd}`);
                    }
                    setShowDatePicker(false);
                  }}
                >
                  <Text style={{ color: color.color.buttonBackground, fontWeight: fonts.fontsWeight.medium }}>
                    {STRINGCONSTANT.BUTTONS.DONE}
                  </Text>
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
              {time}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.ACCESS_TIME} size={fonts.iconSize.md} color={color.text.textPrimary} />
          </TouchableOpacity>

          <Modal transparent visible={showTimePicker} animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  value={tempTime || new Date()}
                  mode="time"
                  display="spinner"
                  onChange={(_, selectedTime) => selectedTime && setTempTime(selectedTime)}
                />
                <TouchableOpacity
                  style={styles.Modal}
                  onPress={() => {
                    if (tempTime) {
                      const h = String(tempTime.getHours()).padStart(2, '0');
                      const m = String(tempTime.getMinutes()).padStart(2, '0');
                      setTime(`${h}:${m}`);
                    }
                    setShowTimePicker(false);
                  }}
                >
                  <Text style={{ color: color.color.buttonBackground, fontWeight: fonts.fontsWeight.medium }}>
                    {STRINGCONSTANT.BUTTONS.DONE}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

     
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.SLOT1}</Text>
          <TouchableOpacity
            style={[styles.input, styles.iconInput]}
            onPress={() => {
              setActiveSlotType('1v1');
              setShowSlotDropdown(true);
            }}
          >
            <Text style={{ color: slot1v1 ? color.text.textPrimary : color.text.textGrey }}>
              {slot1v1 || STRINGCONSTANT.LABELS.SELECT_SLOT}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.ARROW_DOWN} size={fonts.iconSize.lg} color={color.text.textPrimary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.SLOT2}</Text>
          <TouchableOpacity
            style={[styles.input, styles.iconInput]}
            onPress={() => {
              setActiveSlotType('2v2');
              setShowSlotDropdown(true);
            }}
          >
            <Text style={{ color: slot2v2 ? color.text.textPrimary : color.text.textGrey }}>
              {slot2v2 || STRINGCONSTANT.LABELS.SELECT_SLOT}
            </Text>
            <Icon name={STRINGCONSTANT.ICON.ARROW_DOWN} size={fonts.iconSize.lg} color={color.text.textPrimary} />
          </TouchableOpacity>
        </View>

        <Modal transparent visible={showSlotDropdown} animationType="fade">
          <TouchableOpacity
            style={styles.dropdownOverlay}
            onPress={() => setShowSlotDropdown(false)}
            activeOpacity={1}
          >
            <View style={styles.dropdownContainer}>
              <FlatList
                data={STRINGCONSTANT.ARRAY.SLOTOPTIONS}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      activeSlotType === STRINGCONSTANT.TAB.ivi ? setSlot1v1(item) : setSlot2v2(item);
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

   
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRINGCONSTANT.LABELS.DESCRIPTION}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
      </ScrollView>

    
      <TouchableOpacity style={styles.createButton} onPress={handleEditEvent}>
        <Text style={styles.createButtonText}>{STRINGCONSTANT.BUTTONS.EDIT_EVENT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditEventScreen;
