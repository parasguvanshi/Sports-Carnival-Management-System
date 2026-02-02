import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/header/Header';
import styles from './teamListingScreenStyle';
import { teamListingViewModel } from '../../viewmodels/teamListingViewModel';
import { STRINGCONSTANT } from '../../constant/stringConstant';

const TeamListingScreen = ({ route }: any) => {
  const { eventId } = route.params;

  const {
    activeTab,
    setActiveTab,
    malePlayers,
    femalePlayers,
    male2v2Players,
    female2v2Players,
    loadData,
  } = teamListingViewModel(eventId);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const renderPlayers = (data: any[]) => (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <View style={styles.playerCard}>
          <Text style={styles.playerName}>{item.name}</Text>
          <Text style={styles.playerNumber}>{item.phone}</Text>
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            {STRINGCONSTANT.LABELS.NO_PLAYER}
          </Text>
        </View>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.TEAM_LISTING} />

      <View style={styles.tabContainer}>
        {STRINGCONSTANT.ARRAY.TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab === STRINGCONSTANT.TAB.ivi
                ? STRINGCONSTANT.TAB.IvsI
                : STRINGCONSTANT.TAB.IIvsII}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === STRINGCONSTANT.TAB.ivi && (
        <>
          {malePlayers.length > STRINGCONSTANT.LABELS.ZERO && (
            <Text style={styles.sectionHeader}>
              {STRINGCONSTANT.LABELS.MALE_PLAYER}
            </Text>
          )}
          {renderPlayers(malePlayers)}

          {femalePlayers.length > STRINGCONSTANT.LABELS.ZERO && (
            <Text style={styles.sectionHeader}>
              {STRINGCONSTANT.LABELS.FEMALE_PLAYER}
            </Text>
          )}
          {renderPlayers(femalePlayers)}
        </>
      )}

      {activeTab === STRINGCONSTANT.TAB.iivii && (
        <>
          {male2v2Players.length > STRINGCONSTANT.LABELS.ZERO && (
            <Text style={styles.sectionHeader}>
              {STRINGCONSTANT.LABELS.MALE_PLAYER}
            </Text>
          )}
          {renderPlayers(male2v2Players)}

          {female2v2Players.length > STRINGCONSTANT.LABELS.ZERO && (
            <Text style={styles.sectionHeader}>
              {STRINGCONSTANT.LABELS.FEMALE_PLAYER}
            </Text>
          )}
          {renderPlayers(female2v2Players)}
        </>
      )}
    </SafeAreaView>
  );
};

export default TeamListingScreen;
