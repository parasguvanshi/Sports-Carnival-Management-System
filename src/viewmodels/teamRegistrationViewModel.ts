import { useState } from 'react';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import {
  addPlayer1v1,
  addPlayer2v2,
  getPlayers1v1,
  getPlayers2v2Pool,
} from '../services/TeamStorage';
import { MatchFormat, PlayerInfo } from '../types/teamsData';
import { getEventById } from '../services/TeamStorage';
import { useAuth } from '../context/AuthContext';
import { ToastService } from '../utils/toast';
import { STRINGCONSTANT } from '../constant/stringConstant';


export const teamRegistrationViewModel = (eventId: number) => {
  const { user } = useAuth();

  const [activeFormat, setActiveFormat] = useState<MatchFormat>('1v1');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
 

  const isFormValid = name && phone && gender;

  const handleSubmit = async () => {
    if (!isFormValid) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.FIELD_REQUIRED,
      );

      return;
    }

    const event = await getEventById(eventId);
    if (!event) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.EVENT_NOT_FOUND,
      );
      return;
    }

    const now = new Date();
    const deadline = new Date(`${event.date}T${event.time}`);

    if (now > deadline) {
      ToastService.error(
        STRINGCONSTANT.TOAST.ERROR,
        VALIDATE_MESSAGES.DEADLINE,
      );
      return;
    }

    const formatSlot = event.slots.find(slot => slot.format === activeFormat);
    if (!formatSlot) {
      return;
    }

    if (activeFormat === STRINGCONSTANT.TAB.ivi) {
      const players = await getPlayers1v1(eventId);
      const genderCount = players.filter(
        player => player.gender === gender,
      ).length;

      if (genderCount >= formatSlot.totalSlots) {
        ToastService.error(
          STRINGCONSTANT.TOAST.ERROR,
          VALIDATE_MESSAGES.SLOT_FULL,
        );
        return;
      }
    }

    if (activeFormat === STRINGCONSTANT.TAB.iivii) {
      const players = await getPlayers2v2Pool(eventId);

      const maxPlayers = formatSlot.totalSlots * 2;
      if (players.length >= maxPlayers) {
        ToastService.info(
          STRINGCONSTANT.TOAST.INFO,
          VALIDATE_MESSAGES.SLOT_FULL_2V2,
        );
        return;
      }
    }

    const player: PlayerInfo = {
      id: Date.now().toString(),
      eventId,
      name,
      email: user?.email,
      phone,
      format: activeFormat,
      gender,
    };

    try {
      if (activeFormat === STRINGCONSTANT.TAB.ivi) {
        await addPlayer1v1(player);
      } else {
        await addPlayer2v2(player);
      }

      ToastService.success(
        STRINGCONSTANT.TOAST.SUCCESS,
        VALIDATE_MESSAGES.REGISTER_SUCCESS,
      );

      setName('');
      setPhone('');
    } catch (error) {
      if (error instanceof Error) {
        ToastService.error(
          STRINGCONSTANT.TOAST.ERROR,
          VALIDATE_MESSAGES.SOMETHING_WRONG,
        );
      }
    }
  };

  return {
    activeFormat,
    setActiveFormat,
    name,
    setName,
    phone,
    setPhone,
    gender,
    setGender,
    handleSubmit,
  };
};
