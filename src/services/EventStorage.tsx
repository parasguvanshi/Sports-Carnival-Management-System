import AsyncStorage from '@react-native-async-storage/async-storage';
import { eventInfo } from '../types/eventsData';
import { getUser } from './AuthStorage';
import { STRINGCONSTANT } from '../constant/stringConstant';
import { ToastService } from '../utils/toast';

const EVENTS_KEY = '@events';

const canCreateEvent = (role?: string) =>
  role === STRINGCONSTANT.ROLE.ADMIN || role === STRINGCONSTANT.ROLE.ORGANISER;

const canEditOrDeleteEvent = (
  userEmail: string,
  userRole: string,
  event: eventInfo,
) => {
  if (userRole === STRINGCONSTANT.ROLE.ADMIN) return true;
  return event.createdBy === userEmail;
};

export const saveEvents = async (events: eventInfo[]) => {
  try {
    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch (error) {
    if (error instanceof Error) {
      ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
    }
  }
};

export const getEvents = async (): Promise<eventInfo[]> => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);
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
    throw new Error('Only admin or organiser can create events');
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
  if (!user) throw new Error('User not logged in');

  const events = await getEvents();
  const event = events.find(e => e.id === id);
  if (!event) throw new Error('Event not found');

  if (!canEditOrDeleteEvent(user.email, user.role!, event)) {
    throw new Error('You cannot edit this event');
  }

  const newEvents = events.map(e => (e.id === id ? { ...e, ...updatedEvent } : e));
  await saveEvents(newEvents);
};

export const deleteEvent = async (id: number) => {
  const user = await getUser();
  if (!user) throw new Error('User not logged in');

  const events = await getEvents();
  const event = events.find(e => e.id === id);
  if (!event) throw new Error('Event not found');

  if (!canEditOrDeleteEvent(user.email, user.role!, event)) {
    throw new Error('You cannot delete this event');
  }

  const newEvents = events.filter(e => e.id !== id);
  await saveEvents(newEvents);
};

export const joinEvent = async (eventId: number, slotFormat: '1v1' | '2v2') => {
  const user = await getUser();
  if (!user || user.role !== STRINGCONSTANT.ROLE.PARTICIPANT) {
    throw new Error('Only participants can join events');
  }

  const events = await getEvents();
  const updatedEvents = events.map(event => {
    if (event.id === eventId) {
      const slotIndex = event.slots.findIndex(s => s.format === slotFormat);
      if (slotIndex === -1) throw new Error('Slot format not found');

      const slot = event.slots[slotIndex];

      if (slot.participants.includes(user.email)) {
        throw new Error('Already joined');
      }

      if (slot.participants.length >= slot.totalSlots) {
        throw new Error('Slot is full');
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
