import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { eventInfo } from '../types/eventsData';
import { getEvents, deleteEvent } from '../services/EventStorage';
import { VALIDATE_MESSAGES } from '../constant/validateConstant';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const eventViewModel = (onEdit: (id: number) => void) => {
  const [events, setEvents] = useState<eventInfo[]>([]);
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState(STRINGCONSTANT.TAB.TODAY);

  const fetchEvents = async () => {
    const storedEvents = await getEvents();
    setEvents(storedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = (id: number) => {
    Alert.alert(VALIDATE_MESSAGES.DELETE, VALIDATE_MESSAGES.CONFIRM_DELETE, [
      { text: VALIDATE_MESSAGES.CANCLE, style: 'cancel' },
      {
        text: VALIDATE_MESSAGES.DELETE,
        style: 'destructive',
        onPress: async () => {
          await deleteEvent(id);
          await fetchEvents();
          Alert.alert(VALIDATE_MESSAGES.DELETED);
        },
      },
    ]);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();

    const eventDay = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
    );
    const todayDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    let matchesTab = false;
    if (activeTab === STRINGCONSTANT.TAB.TODAY) {
      matchesTab = eventDay.getTime() === todayDay.getTime();
    } 
    else if (activeTab === STRINGCONSTANT.TAB.UPCOMING) {
      matchesTab = eventDay.getTime() > todayDay.getTime();
    } 
    else if (activeTab === STRINGCONSTANT.TAB.COMPLETED) {
      matchesTab = eventDay.getTime() < todayDay.getTime();
    }

    return matchesSearch && matchesTab;
  });

  return {
    searchText,
    activeTab,
    filteredEvents,
    setSearchText,
    setActiveTab,
    fetchEvents,
    handleDelete,
  };
};
