import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { eventInfo } from '../types/eventsData';

const EVENTS_KEY = '@events';

export const saveEvents = async (events: eventInfo) => {
  try {
    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
};

export const getEvents = async () => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);
    return events ? JSON.parse(events) : [];
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
};

export const addEvent = async (event: eventInfo) => {
  const events = await getEvents();
  const newEvent = { ...event, id: Date.now() };
  events.push(newEvent);
  await saveEvents(events);
};

export const updateEvent = async (id: number, updatedEvent: eventInfo) => {
  const events = await getEvents();
  const newEvents = events.map((event: eventInfo) =>
    event.id === id ? { ...event, ...updatedEvent } : event,
  );
  await saveEvents(newEvents);
};

export const deleteEvent = async (id: number) => {
  const events = await getEvents();
  const newEvents = events.filter((event: eventInfo) => event.id !== id);
  await saveEvents(newEvents);
};
