import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './eventDetailsScreenStyle';
import { color } from '../../theme/colorConstants';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStackNavigator';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import { fonts } from '../../theme/fontsConstants';
import { eventDetailsViewModel } from '../../viewmodels/eventDetailsViewModel';

type Props = NativeStackScreenProps<AppStackParamList,'EventDetails'>;

const EventDetailsScreen = ({ navigation ,route }: Props) => {
  const { event } = route.params;

  const {
    eventImageSource,
    showJoinButton,
    isJoinDisabled,
    showTeamListingButton,
    getSlotByFormat,
    slot1v1,
    slot2v2,
  } = eventDetailsViewModel(event);

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.EVENT_DETAIL} />

      <View style={styles.imageContainer}>
        <ImageBackground
          source={eventImageSource}
          style={styles.headerImage}
          imageStyle={styles.headerImageStyle}
        >
          <Text style={styles.eventTitle}>{event.title}</Text>
        </ImageBackground>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.CALENDER}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>{event.date}</Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.ACCESS_TIME}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>{event.time}</Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.GROUP}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRINGCONSTANT.LABELS.FORMAT}{' '}
            {event.slots.map(slot => slot.format).join(', ') || STRINGCONSTANT.APP.NA}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.TENNIS}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRINGCONSTANT.LABELS.SLOT_REMAIN}{' '}
            {event.slots.reduce((acc, slot) => acc + slot.totalSlots, 0) || STRINGCONSTANT.APP.NA}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.LOOKS2}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRINGCONSTANT.LABELS.SLOT1}{' '}
            {slot1v1?.totalSlots ?? STRINGCONSTANT.APP.NA}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.LOOKS1}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRINGCONSTANT.LABELS.SLOT2}{' '}
            {slot2v2?.totalSlots ?? STRINGCONSTANT.APP.NA}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRINGCONSTANT.ICON.DESCRIPTION}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {event.description ?? STRINGCONSTANT.APP.NA}
          </Text>
        </View>

        {showJoinButton && (
          <Button
            name={STRINGCONSTANT.BUTTONS.JOIN_EVENT}
            disabled={isJoinDisabled}
            onPress={() => navigation.navigate('TeamRegistration', { eventId: event.id })}
          />
        )}

        {showTeamListingButton && (
          <Button
            name={STRINGCONSTANT.BUTTONS.TEAM_LISTING}
            onPress={() => navigation.navigate('TeamListing', { eventId: event.id })}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EventDetailsScreen;
