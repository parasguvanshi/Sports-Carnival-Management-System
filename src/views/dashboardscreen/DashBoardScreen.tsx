import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header/Header';
import EventCard from '../../components/eventcard/EventCard';
import styles from './dashBoardScreenStyle';
import { color } from '../../theme/colorConstants';
import { dashBoardViewModel } from '../../viewmodels/dashBoardViewModal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../navigation/EventTabsNavigator';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { fonts } from '../../theme/fontsConstants';

type props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'DashBoardScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;

const DashBoardScreen = ({ navigation }: props) => {
  const {
    greetingName,
    role,
    filteredEvents,
    activeTab,
    searchText,
    stats,
    setActiveTab,
    setSearchText,
    myEventsCount,
    canSeeUserManagement,
    canCreateEvent,
    editEvent,
    handleDeleteEvent,
  } = dashBoardViewModel(navigation);

  const StatCard = ({ label, value }: { label: string; value: any }) => (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header name={STRINGCONSTANT.HEADER.DASHBOARD} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.greeting}>{STRINGCONSTANT.APP.HEY} {' '}{greetingName} </Text>

          <View style={styles.statsGrid}>
            <StatCard label={STRINGCONSTANT.LABELS.MY_EVENT} value={myEventsCount} />
            <StatCard label={STRINGCONSTANT.LABELS.TOTAL_EVENT} value={stats.total} />
            <StatCard label={STRINGCONSTANT.TAB.UPCOMING} value={stats.upcoming} />
            <StatCard label={STRINGCONSTANT.TAB.COMPLETED} value={stats.completed} />
          </View>

          {canSeeUserManagement && (
            <View style={styles.sectionCard}>
              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate('UserManagement', {})}
                >
                  <Icon name={STRINGCONSTANT.ICON.PERSON} size={fonts.iconSize.md} color={color.color.secondary} />
                  <Text style={styles.actionText}>{STRINGCONSTANT.LABELS.USERS}</Text>
                </TouchableOpacity>

                {canCreateEvent && (
                  <TouchableOpacity
                    style={[styles.actionButton, styles.primaryAction]}
                    onPress={() => navigation.navigate('CreateEvent', {})}
                  >
                    <Icon name={STRINGCONSTANT.ICON.ADD} size={fonts.iconSize.md} color={color.color.secondary} />
                    <Text style={styles.actionText}>{STRINGCONSTANT.BUTTONS.CREATE_EVENT}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}

          <Text style={styles.sectionHeader}>{STRINGCONSTANT.LABELS.MY_EVENT}</Text>

          <View style={styles.searchContainer}>
            <Icon name={STRINGCONSTANT.ICON.SEARCH} size={fonts.iconSize.md} color={color.text.textPrimary} />
            <TextInput
              placeholder={STRINGCONSTANT.PLACEHOLDERS.SEARCH_EVENT}
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          <View style={styles.tabContainer}>
            {STRINGCONSTANT.ARRAY.DAY.map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab as any)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredEvents}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({ item }) => (
              <EventCard
                event={item}
                activeTab={activeTab}
                onPress={() =>
                  navigation.navigate('EventDetails', { event: item })
                }
                onEdit={() => editEvent(item)}
                onDelete={() => handleDeleteEvent(item.id)}
              />
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
