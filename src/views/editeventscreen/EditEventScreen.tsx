import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './editEventScreenStyle';
import Header from '../../components/header/Header';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { getEvents, updateEvent } from '../../services/EventStorage';
import { eventImage } from '../../constant/imageConstant';
import { color } from '../../theme/colorConstants';
import { eventInfo } from '../../types/eventsData';
import { STRING } from '../../constant/stringConstant';

type ImageKey = keyof typeof eventImage;

const EditEventScreen = ({ route, navigation }: any) => {
  const { eventId } = route.params;
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [imageKey, setImageKey] = useState<ImageKey>('event1');
  const [format, setFormat] = useState('');
  const [slot, setSlot] = useState('');

  useEffect(() => {
    const loadEvent = async () => {
      const events = await getEvents();
      const event = events.find((event: eventInfo) => event.id === eventId);

      if (event) {
        setTitle(event.title);
        setDate(event.date);
        setTime(event.time);
        setFormat(event.format);
        setDescription(event.description);
        setImageKey(event.image as ImageKey);
        setSlot(event.slot || '');
      }
    };
    loadEvent();
  }, [eventId]);

  const handleEditEvent = async () => {

    if (!title || !date || !time || !slot || !imageKey) {
      Alert.alert(VALIDATE_MESSAGES.FIELD_REQUIRED);
      return;
    }

    const updatedEvent = {
      id: eventId,
      title,
      date,
      time,
      description,
      format,
      image: imageKey,
      slot,
    };

    try {
      await updateEvent(eventId, updatedEvent);
      Alert.alert(VALIDATE_MESSAGES.EVENT_EDITED);
      navigation.goBack();

    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRING.HEADER.EDIT_EVENT} />

      <ScrollView contentContainerStyle={styles.inputContainerList}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.EVENT_TITLE}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.EVENT_TITLE}
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.EVENT_DATE}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.EVENT_DATE}
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}></Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.EVENT_TIME}
            value={time}
            onChangeText={setTime}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.FORMAT}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.FORMAT}
            value={format}
            onChangeText={setFormat}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.SLOT_REMAIN}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.SLOT}
            value={slot}
            onChangeText={setSlot}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.EVENT_IMAGE}</Text>
          <View style={styles.keyAlignment}>
            {Object.keys(eventImage).map(key => (
              <TouchableOpacity
                key={key}
                onPress={() => setImageKey(key as ImageKey)}
                style={
                  imageKey === key
                    ? styles.keyContainerOptional
                    : styles.keyContainer
                }
              >
                <Text
                  style={{
                    color:
                      imageKey === key
                        ? color.color.buttonBackground
                        : color.color.background,
                  }}
                >
                  {key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.DESCRIPTION}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder={STRING.PLACEHOLDERS.DESCRIPTION}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={STRING.APP.LINES}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.createButton} onPress={handleEditEvent}>
        <Text style={styles.createButtonText}>{STRING.BUTTONS.EDIT_EVENT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditEventScreen;
