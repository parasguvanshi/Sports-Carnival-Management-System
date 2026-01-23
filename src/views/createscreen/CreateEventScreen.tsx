import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import styles from './createEventScreenStyle';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { addEvent } from '../../services/EventStorage';
import { eventImage } from '../../constant/imageConstant'; 
import { color } from '../../theme/colorConstants';
import { STRING } from '../../constant/stringConstant';

type ImageKey = keyof typeof eventImage;

const CreateEventScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [format, setFormat] = useState('');
  const [slot ,setSlot] = useState('');
  const [imageKey, setImageKey] = useState<ImageKey>(''); 

  const handleCreateEvent = async () => {
    if (!title || !date || !time || !format || !slot || !imageKey) {
      Alert.alert(VALIDATE_MESSAGES.FIELD_REQUIRED);
      return;
    }

    const newEvent = {
      title,
      date,
      time,
      format,
      slot,
      image: imageKey, 
      description,
      id: Date.now(), 
    };

    try {
      await addEvent(newEvent);
      Alert.alert(VALIDATE_MESSAGES.EVENT_CREATED);
      navigation.goBack();
    } catch (error) {
      if(error instanceof Error){
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRING.HEADER.CREATE_EVENT} />
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
          <Text style={styles.label}>{STRING.LABELS.EVENT_TIME}</Text>
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
          <Text style={styles.label}>{STRING.LABELS.SLOT}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRING.PLACEHOLDERS.SLOT}
            value={slot}
            onChangeText={setSlot}
          />
        </View>

  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{STRING.LABELS.EVENT_IMAGE}</Text>
          <View style={styles.imageContainer}>
            {Object.keys(eventImage).map((key) => (
              <TouchableOpacity
               key={key}
                onPress={() => setImageKey(key as ImageKey)}
                style={imageKey === key ? styles.keyContainerOptional  : styles.keyContainer}
              >
                <Text style={{ color: imageKey === key ? color.color.buttonBackground : color.color.background }}>
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

      <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
        <Text style={styles.createButtonText}>{STRING.BUTTONS.CREATE_EVENT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
