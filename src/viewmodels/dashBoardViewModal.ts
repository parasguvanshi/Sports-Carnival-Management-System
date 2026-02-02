import { useCallback, useMemo, useState } from 'react';
import { getEvents, deleteEvent} from '../services/EventStorage';
import { useAuth } from '../context/AuthContext';
import { DayTab, eventInfo } from '../types/eventsData';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const dashBoardViewModel = (navigation: any) => {
  const { user } = useAuth();

  const [events, setEvents] = useState<eventInfo[]>([]);
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState<DayTab>('today');

  useFocusEffect(
    useCallback(() => {
      getEvents().then(setEvents);
    }, []),
  );

  const today = new Date().toDateString();

  const filteredEvents = useMemo(() => {
    let filtered = events.filter(event => {
      const eventDate = new Date(event.date).toDateString();

      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesTab =
        activeTab === 'today'
          ? eventDate === today
          : activeTab === 'upcoming'
          ? eventDate > today 
        : eventDate < today;

      return matchesSearch && matchesTab;
    });

    if (
      user?.role === STRINGCONSTANT.ROLE.ORGANISER ||
      user?.role === STRINGCONSTANT.ROLE.ADMIN
    ) {
      filtered = filtered.filter(event => event.createdBy === user.email);
    } else if (user?.role === STRINGCONSTANT.ROLE.PARTICIPANT) {
      filtered = filtered.filter(event =>
        event.slots.some(slot => slot.participants.includes(user.email))
      );
    }

    return filtered;
  }, [events, searchText, activeTab, user]);

  const stats = {
    total: events.length,
    upcoming: events.filter(
      event => new Date(event.date).toDateString() > today,
    ).length,
    completed: events.filter(
      event => new Date(event.date).toDateString() < today,
    ).length,
  };

  const myEventsCount = useMemo(() => {
    if (!user) return 0;

    if (
      user.role === STRINGCONSTANT.ROLE.ADMIN ||
      user.role === STRINGCONSTANT.ROLE.ORGANISER
    ) {
      return events.filter(event => event.createdBy === user.email).length;
    }

    return events.filter(event => 
      event.slots.some(slot => slot.participants.includes(user.email))
    ).length;
  }, [events, user]);

  const canCreateEvent =
    user?.role === STRINGCONSTANT.ROLE.ADMIN ||
    user?.role === STRINGCONSTANT.ROLE.ORGANISER;

  const editEvent = (event: eventInfo) => {
    navigation.navigate('EditEvent', { eventId: event.id });
  };

  const handleDeleteEvent = (id: number) => {
    Alert.alert(VALIDATE_MESSAGES.DELETE, VALIDATE_MESSAGES.CONFIRM_DELETE, [
      { text: VALIDATE_MESSAGES.CANCLE, style: 'cancel' },
      {
        text: VALIDATE_MESSAGES.DELETE,
        style: 'destructive',
        onPress: async () => {
          await deleteEvent(id);
          const updatedEvent = await getEvents();
          setEvents(updatedEvent);
          Alert.alert(VALIDATE_MESSAGES.DELETED);
        },
      },
    ]);
  };

  return {
    greetingName: user?.name ?? STRINGCONSTANT.ROLE.USER,
    role: user?.role ?? STRINGCONSTANT.ROLE.PARTICIPANT,
    events,
    filteredEvents,
    activeTab,
    searchText,
    stats,
    setActiveTab,
    setSearchText,
    myEventsCount,
    canSeeUserManagement: user?.role === STRINGCONSTANT.ROLE.ADMIN,
    canSeeTeamRequest:
    user?.role === STRINGCONSTANT.ROLE.ADMIN || STRINGCONSTANT.ROLE.ORGANISER,
    canCreateEvent,
    editEvent,
    handleDeleteEvent,
  };
};
