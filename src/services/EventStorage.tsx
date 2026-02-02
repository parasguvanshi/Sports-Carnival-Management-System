import AsyncStorage from '@react-native-async-storage/async-storage';
import { eventInfo } from '../types/eventsData';
import { getUser } from './AuthStorage';
import { STRINGCONSTANT } from '../constant/stringConstant';
import { ToastService } from '../utils/toast';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';

const canCreateEvent = (role?: string) =>
  role === STRINGCONSTANT.ROLE.ADMIN || role === STRINGCONSTANT.ROLE.ORGANISER;

export const saveEvents = async (events: eventInfo[]) => {
  try {
    await AsyncStorage.setItem(
      STRINGCONSTANT.KEY.EVENTS_KEY,
      JSON.stringify(events),
    );
  } catch (error) {
    if (error instanceof Error) {
      ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
    }
  }
};

export const getEvents = async (): Promise<eventInfo[]> => {
  try {
    const events = await AsyncStorage.getItem(STRINGCONSTANT.KEY.EVENTS_KEY);
    return events ? JSON.parse(events) : [];
  } catch (error) {
    if (error instanceof Error) {
      ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
    }
    return [];
  }
};

export const addEvent = async (
  event: Omit<eventInfo, 'id' | 'createdBy' | 'createdByRole'>,
) => {
  const user = await getUser();

  if (!user || !canCreateEvent(user.role)) {
    throw new Error(VALIDATE_MESSAGES.EVENT_CREATION_ALLOWED);
  }

  const events = await getEvents();

  const newEvent: eventInfo = {
    ...event,
    id: Date.now(),
    createdBy: user.email,
    createdByRole: user.role!,
  };

  events.push(newEvent);
  await saveEvents(events);
};

export const updateEvent = async (
  id: number,
  updatedEvent: Partial<eventInfo>,
) => {
  const user = await getUser();
  if (!user) throw new Error(VALIDATE_MESSAGES.USER_NOT_EXIST);

  const events = await getEvents();
  const event = events.find(event => event.id === id);
  if (!event) {
    throw new Error(VALIDATE_MESSAGES.EVENT_NOT_FOUND);
  }

  const newEvents = events.map(event =>
    event.id === id ? { ...event, ...updatedEvent } : event,
  );
  await saveEvents(newEvents);
};

export const deleteEvent = async (id: number) => {
  const user = await getUser();
  if (!user) throw new Error(VALIDATE_MESSAGES.USER_NOT_EXIST);

  const events = await getEvents();
  const event = events.find(event => event.id === id);

  if (!event) {
    throw new Error(VALIDATE_MESSAGES.EVENT_NOT_FOUND);
  }

  const newEvents = events.filter(event => event.id !== id);
  await saveEvents(newEvents);
};

export const joinEvent = async (eventId: number, slotFormat: '1v1' | '2v2') => {
  const user = await getUser();

  if (!user || user.role !== STRINGCONSTANT.ROLE.PARTICIPANT) {
    throw new Error(VALIDATE_MESSAGES.PARTICIPANTS_ALLOWED);
  }

  const events = await getEvents();
  const updatedEvents = events.map(event => {
    if (event.id === eventId) {
      const slotIndex = event.slots.findIndex(
        slot => slot.format === slotFormat,
      );

      const slot = event.slots[slotIndex];

      if (slot.participants.includes(user.email)) {
        throw new Error(VALIDATE_MESSAGES.ALREADY_JOINED_EVENT);
      }

      if (slot.participants.length >= slot.totalSlots) {
        throw new Error(VALIDATE_MESSAGES.SLOT_FULL);
      }

      const updatedSlot = {
        ...slot,
        participants: [...slot.participants, user.email],
      };

      const newSlots = [...event.slots];
      newSlots[slotIndex] = updatedSlot;

      return { ...event, slots: newSlots };
    }
    return event;
  });

  await saveEvents(updatedEvents);
};
