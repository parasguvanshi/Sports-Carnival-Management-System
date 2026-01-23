import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ListRenderItem,
  Alert,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header/Header';
import styles from './eventScreenStyle';
import { eventInfo } from '../../types/eventsData';
import { color } from '../../theme/colorConstants';
import { useAuth } from '../../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { VALIDATE_MESSAGES } from '../../constant/validateConstant';
import { getEvents, deleteEvent } from '../../services/EventStorage';
import { eventImage } from '../../constant/imageConstant';
import { fonts } from '../../theme/fontsConstants';
import { STRING } from '../../constant/stringConstant';

type props = NativeStackScreenProps<RootStackParamList, 'EventScreen'>;

const EventScreen = ({ navigation }: props) => {
  const { user } = useAuth();

  const [events, setEvents] = useState<eventInfo[]>([]);
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('today');

  const today = new Date().toDateString();

  useEffect(() => {
    const fetchEvents = async () => {
      const storedEvents = await getEvents();
      setEvents(storedEvents);
    };

    fetchEvents();

    const unsubscribe = navigation.addListener('focus', fetchEvents);
    return unsubscribe;
  }, []);

  const handleDelete = async (id: number) => {
    Alert.alert(VALIDATE_MESSAGES.DELETE, VALIDATE_MESSAGES.CONFIRM_DELETE, [
      { text: VALIDATE_MESSAGES.CANCLE, style: 'cancel' },
      {
        text: VALIDATE_MESSAGES.DELETE,
        style: 'destructive',
        onPress: async () => {
          await deleteEvent(id);
          const updatedEvents = await getEvents();
          setEvents(updatedEvents);
          Alert.alert(VALIDATE_MESSAGES.DELETED);
        },
      },
    ]);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date).toDateString();
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesTab =
      activeTab === 'today' ? eventDate === today : eventDate > today;

    return matchesSearch && matchesTab;
  });

  const handleNavigate = (item: eventInfo) => {
    navigation.navigate('EventDetails', { event: item });
  };

  const renderItem: ListRenderItem<eventInfo> = ({ item }) => {
    const imageSource = eventImage[item.image as keyof typeof eventImage];

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => handleNavigate(item)}>
          <ImageBackground
            source={imageSource}
            style={styles.imageBackground}
            imageStyle={styles.cardImage}
          >
            <View style={styles.textLabel}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventText}>{item.date}</Text>
              <Text style={styles.eventText}>{item.time}</Text>
            </View>

            <View style={styles.actionRow}>
              {(user?.role === 'admin' || user?.role === 'organiser') && (
                <>
                  <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={() =>
                      navigation.navigate('EditEvent', { eventId: item.id })
                    }
                  >
                    <Icon
                      name={STRING.ICON.EDIT}
                      size={fonts.iconSize.sm}
                      color={color.icon.editIcon}
                    />
                    <Text style={styles.iconText}>{STRING.BUTTONS.EDIT}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={() => handleDelete(item.id)}
                  >
                    <Icon
                      name={STRING.ICON.DELETE}
                      size={fonts.iconSize.sm}
                      color={color.icon.deleteIcon}
                    />
                    <Text style={styles.iconText}>{STRING.BUTTONS.DELETE}</Text>
                  </TouchableOpacity>
                </>
              )}

              {user?.role === 'participant' && (
                <TouchableOpacity style={styles.joinIconBtn}>
                  <Icon
                    name={STRING.ICON.LOGIN}
                    size={fonts.iconSize.sm}
                    color={color.icon.primaryIcon}
                  />
                  <Text style={styles.iconText}>{STRING.BUTTONS.JOIN}</Text>
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRING.HEADER.EVENT} />

      <View style={styles.searchContainer}>
        <Icon
          name={STRING.ICON.SEARCH}
          size={fonts.iconSize.lg}
          color={color.color.background}
        />
        <TextInput
          placeholder={STRING.PLACEHOLDERS.SEARCH_EVENT}
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'today' && styles.activeTab]}
          onPress={() => setActiveTab(STRING.BUTTONS.TODAY)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'today' && styles.activeTabText,
            ]}
          >
            {STRING.BUTTONS.TODAY}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab(STRING.BUTTONS.UPCOMING)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'upcoming' && styles.activeTabText,
            ]}
          >
            {STRING.BUTTONS.UPCOMING}
          </Text>
        </TouchableOpacity>

        {(user?.role === 'admin' || user?.role === 'organiser') && (
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateEvent', {})}
          >
            <Icon
              name={STRING.ICON.ADD}
              size={fonts.iconSize.lg}
              color={color.color.background}
            />
            <Text style={styles.createText}>{STRING.BUTTONS.CREATE_BUTTON}</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </SafeAreaView>
  );
};

export default EventScreen;
