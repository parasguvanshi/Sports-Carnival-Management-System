import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ListRenderItem,
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
import { RootStackParamList } from '../../navigation/StackNavigator';
import { eventImage } from '../../constant/imageConstant';
import { fonts } from '../../theme/fontsConstants';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { eventViewModel } from '../../viewmodels/eventViewModel';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../navigation/EventTabsNavigator';

type props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'EventScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;

const EventScreen = ({ navigation }: props) => {
  const { user } = useAuth();

  const {
    searchText,
    activeTab,
    filteredEvents,
    setSearchText,
    setActiveTab,
    fetchEvents,
    handleDelete,
  } = eventViewModel(id => navigation.navigate('EditEvent', { eventId: id }));

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchEvents);
    return unsubscribe;
  }, [navigation]);

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

              {activeTab === STRINGCONSTANT.TAB.TODAY ? (
                <Text style={styles.eventText}>{item.time}</Text>
              ) : (
                <Text style={styles.eventText}>{item.date}</Text>
              )}
            </View>

            <View style={styles.actionRow}>
              {user?.role === STRINGCONSTANT.ROLE.PARTICIPANT && (
                <TouchableOpacity
                  style={styles.joinIconBtn}
                  onPress={() =>
                    navigation.navigate('EventDetails', { event: item })
                  }
                >
                  <Icon
                    name={STRINGCONSTANT.ICON.LOGIN}
                    size={fonts.iconSize.sm}
                    color={color.icon.primaryIcon}
                  />
                  <Text style={styles.iconText}>
                    {STRINGCONSTANT.BUTTONS.JOIN}
                  </Text>
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
      <Header name={STRINGCONSTANT.HEADER.EVENT} />

      <View style={styles.searchContainer}>
        <Icon
          name={STRINGCONSTANT.ICON.SEARCH}
          size={fonts.iconSize.lg}
          color={color.color.background}
        />
        <TextInput
          placeholder={STRINGCONSTANT.PLACEHOLDERS.SEARCH_EVENT}
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === STRINGCONSTANT.TAB.TODAY && styles.activeTab,
          ]}
          onPress={() => setActiveTab(STRINGCONSTANT.TAB.TODAY)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === STRINGCONSTANT.TAB.TODAY && styles.activeTabText,
            ]}
          >
            {STRINGCONSTANT.BUTTONS.TODAY}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === STRINGCONSTANT.TAB.UPCOMING && styles.activeTab,
          ]}
          onPress={() => setActiveTab(STRINGCONSTANT.TAB.UPCOMING)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === STRINGCONSTANT.TAB.UPCOMING && styles.activeTabText,
            ]}
          >
            {STRINGCONSTANT.BUTTONS.UPCOMING}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === STRINGCONSTANT.TAB.COMPLETED && styles.activeTab,
          ]}
          onPress={() => setActiveTab(STRINGCONSTANT.TAB.COMPLETED)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === STRINGCONSTANT.TAB.COMPLETED &&
                styles.activeTabText,
            ]}
          >
            {STRINGCONSTANT.BUTTONS.COMPLETED}
          </Text>
        </TouchableOpacity>

        {(user?.role === STRINGCONSTANT.ROLE.ADMIN ||
          user?.role === STRINGCONSTANT.ROLE.ORGANISER) && (
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateEvent', {})}
          >
            <Icon
              name={STRINGCONSTANT.ICON.ADD}
              size={fonts.iconSize.lg}
              color={color.color.background}
            />
            <Text style={styles.createText}>
              {STRINGCONSTANT.BUTTONS.CREATE_BUTTON}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {filteredEvents.length === 0 ? (
        <View>
          <Text style={styles.emptyText}>
            {STRINGCONSTANT.LABELS.NOT_FOUND}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </SafeAreaView>
  );
};

export default EventScreen;
