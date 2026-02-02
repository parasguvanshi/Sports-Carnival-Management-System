import { useState } from 'react';
import { Alert } from 'react-native';
import { addEvent } from '../services/EventStorage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { useAuth } from '../context/AuthContext';
import { eventInfo, EventSlot } from '../types/eventsData';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const createEventViewModel = (navigation: any) => {
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [format, setFormat] = useState<'1v1' | '2v2'>('1v1');
  const [slot1v1, setSlot1v1] = useState('');
  const [slot2v2, setSlot2v2] = useState('');
  const [matchType, setMatchType] = useState<'roundrobin' | 'knockout'>(
    'roundrobin',
  );
  const [description, setDescription] = useState('');
  const [imageKey, setImageKey] = useState<string>('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSlotDropdown, setShowSlotDropdown] = useState(false);

  const [tempDate, setTempDate] = useState<Date | null>(null);
  const [tempTime, setTempTime] = useState<Date | null>(null);

  const handleCreateEvent = async () => {
    if (!title || !date || !time || !imageKey) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.FIELD_REQUIRED,
      );
      return;
    }

    const slots: EventSlot[] = [];
    if (slot1v1)
      slots.push({
        format: '1v1',
        totalSlots: Number(slot1v1),
        participants: [],
      });
    if (slot2v2)
      slots.push({
        format: '2v2',
        totalSlots: Number(slot2v2),
        participants: [],
      });

    if (slots.length === 0) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.SELECT_FORMAT_SLOT,
      );
      return;
    }

    const newEvent: eventInfo = {
      id: Date.now(),
      title,
      date,
      time,
      matchType,
      slots,
      image: imageKey,
      description,
      createdBy: user?.email!,
      createdByRole: user?.role!,
    };

    try {
      await addEvent(newEvent);
      ToastService.success(
        STRINGCONSTANT.TOAST.SUCCESS,
        VALIDATE_MESSAGES.EVENT_CREATED,
      );
      navigation.goBack();
    } catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
    }
  };

  return {
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
  };
};
