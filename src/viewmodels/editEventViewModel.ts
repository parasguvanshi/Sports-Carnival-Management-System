import { useEffect, useState } from 'react';
import { getEvents, updateEvent } from '../services/EventStorage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { eventImage } from '../constant/imageConstant';
import { eventInfo, EventSlot } from '../types/eventsData';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';

type ImageKey = keyof typeof eventImage;

export const editEventViewModel = (eventId: number, navigation: any) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [slots, setSlots] = useState<EventSlot[]>([]);
  const [imageKey, setImageKey] = useState<ImageKey>('event1');

  const [slot1v1, setSlot1v1] = useState<number | null>(null);
  const [slot2v2, setSlot2v2] = useState<number | null>(null);

   const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSlotDropdown, setShowSlotDropdown] = useState(false);
  const [activeSlotType, setActiveSlotType] = useState<'1v1' | '2v2'>('1v1');

  const [tempDate, setTempDate] = useState<Date | null>(null);
  const [tempTime, setTempTime] = useState<Date | null>(null);

  useEffect(() => {
    const loadEvent = async () => {
      const events = await getEvents();
      const event = events.find(event => event.id === eventId);
      if (!event) {
        return;
      }

      setTitle(event.title);
      setDate(event.date);
      setTime(event.time);
      setDescription(event.description || '');
      setImageKey(event.image as ImageKey);

      const slot1 = event.slots.find(
        slot => slot.format === STRINGCONSTANT.TAB.ivi,
      );
      const slot2 = event.slots.find(
        slot => slot.format === STRINGCONSTANT.TAB.iivii,
      );
      setSlot1v1(slot1?.totalSlots || null);
      setSlot2v2(slot2?.totalSlots || null);
    };

    loadEvent();
  }, [eventId]);

  const handleEditEvent = async () => {
    if (!title || !date || !time || (!slot1v1 && !slot2v2)) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.FIELD_REQUIRED,
      );
      return;
    }

    const updatedSlots: EventSlot[] = [];
    if (slot1v1) {
      updatedSlots.push({
        format: '1v1',
        totalSlots: slot1v1,
        participants: [],
      });
    }
    if (slot2v2) {
      updatedSlots.push({
        format: '2v2',
        totalSlots: slot2v2,
        participants: [],
      });
    }

    const updatedEvent: Partial<eventInfo> = {
      title,
      date,
      time,
      description,
      slots: updatedSlots,
      image: imageKey,
    };

    try {
      await updateEvent(eventId, updatedEvent);
      ToastService.success(
        STRINGCONSTANT.TOAST.SUCCESS,
        VALIDATE_MESSAGES.EVENT_EDITED,
      );
      navigation.goBack();
    } catch (error) {
      if (error instanceof Error) {
        ToastService.error(STRINGCONSTANT.TOAST.ERROR, error.message);
      }
    }
  };

  return {
    title,
    setTitle,
    date,
    setDate,
    time,
    setTime,
    description,
    setDescription,
    slot1v1,
    setSlot1v1,
    slot2v2,
    setSlot2v2,
    slots,
    setSlots,
    imageKey,
    setImageKey,
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
  };
};
