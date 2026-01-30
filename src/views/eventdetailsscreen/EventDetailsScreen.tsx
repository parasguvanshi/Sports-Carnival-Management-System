import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './eventDetailsScreenStyle';
import { color } from '../../theme/colorConstants';
import { useAuth } from '../../context/AuthContext';
import { eventImage } from '../../constant/imageConstant';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { STRING } from '../../constant/stringConstant';
import { fonts } from '../../theme/fontsConstants';

type Props = NativeStackScreenProps<RootStackParamList, 'EventDetails'>;

const EventDetailsScreen = ({ route }: Props) => {
  const { user } = useAuth();
  const { event } = route.params;

  const isButtonDisable = false;

  const eventImageSource =
    typeof event.image === 'string' ? eventImage[event.image as keyof typeof eventImage] : event.image;

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRING.HEADER.EVENT_DETAIL} />

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
            name={STRING.ICON.CALENDER}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>{event.date}</Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRING.ICON.ACCESS_TIME}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {event.time} {event.duration ? `(${event.duration})` : ''}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRING.ICON.GROUP}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRING.LABELS.FORMAT} {event.format}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon
            name={STRING.ICON.TENNIS}
            size={fonts.iconSize.md}
            color={color.icon.primaryIcon}
          />
          <Text style={styles.detailText}>
            {STRING.LABELS.SLOT_REMAIN} {event.slot ?? STRING.APP.NA}
          </Text>
        </View>

        {event.rules && (
          <View style={styles.rulesContainer}>
            <Text style={styles.sectionTitle}>{STRING.APP.RULES}</Text>
            <Text style={styles.rulesText}>{event.rules}</Text>
          </View>
        )}

        {user?.role === 'participant' && (
          <Button
            name={STRING.BUTTONS.JOIN_EVENT}
            disabled={isButtonDisable}
            onPress={() => {}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EventDetailsScreen;
