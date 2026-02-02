import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { eventImage } from '../constant/imageConstant';
import { eventInfo, EventSlot, FormatType } from '../types/eventsData';
import { STRINGCONSTANT } from '../constant/stringConstant';
import { ImageSourcePropType } from 'react-native';

export const eventDetailsViewModel = (event: eventInfo) => {
  const { user } = useAuth();

  const eventImageSource = useMemo(() => {
    return typeof event.image === STRINGCONSTANT.TYPES.STRING
      ? eventImage[event.image as keyof typeof eventImage]
      : (event.image as ImageSourcePropType);
  }, [event.image]);

  const showJoinButton = user?.role === STRINGCONSTANT.ROLE.PARTICIPANT;

  const showTeamListingButton =
    user?.role === STRINGCONSTANT.ROLE.ADMIN ||
    user?.role === STRINGCONSTANT.ROLE.ORGANISER;

  const isJoinDisabled = false;

  const getSlotByFormat = (format: FormatType): EventSlot | undefined => {
    return event.slots.find(slot => slot.format === format);
  };

  const slot1v1 = getSlotByFormat('1v1');
  const slot2v2 = getSlotByFormat('2v2');

  return {
    event,
    eventImageSource,
    showJoinButton,
    isJoinDisabled,
    showTeamListingButton,
    getSlotByFormat,
    slot1v1,
    slot2v2
  };
};
