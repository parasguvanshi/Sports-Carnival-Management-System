// components/eventCard/EventCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { eventInfo, Props } from '../../types/eventsData';
import { eventImage } from '../../constant/imageConstant';
import { color } from '../../theme/colorConstants';
import { fonts } from '../../theme/fontsConstants';
import { STRINGCONSTANT } from '../../constant/stringConstant';
import styles from './eventCardStyle';


const EventCard = ({
  event,
  activeTab,
  onPress,
  onEdit,
  onDelete,
  role,
} : Props) => {
  const imageSource = eventImage[event.image as keyof typeof eventImage];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <ImageBackground
          source={imageSource}
          style={styles.imageBackground}
          imageStyle={styles.cardImage}
        >
          <View style={styles.textLabel}>
            <Text
              style={styles.eventTitle}
              numberOfLines={STRINGCONSTANT.APP.LINES1}
            >
              {event.title}
            </Text>
            <View>
              {activeTab === STRINGCONSTANT.TAB.TODAY ? (
                <Text style={styles.eventText}>{event.time}</Text>
              ) : (
                <Text style={styles.eventText}>{event.date}</Text>
              )}
            </View>
          </View>

          <View style={styles.actionRow}>
            {onEdit && (
              <TouchableOpacity style={styles.iconBtn} onPress={onEdit}>
                <Icon
                  name={STRINGCONSTANT.ICON.EDIT}
                  size={fonts.iconSize.sm}
                  color={color.icon.editIcon}
                />
                <Text style={styles.iconText}>
                  {STRINGCONSTANT.BUTTONS.EDIT}
                </Text>
              </TouchableOpacity>
            )}

            {onDelete && (
              <TouchableOpacity style={styles.iconBtn} onPress={onDelete}>
                <Icon
                  name={STRINGCONSTANT.ICON.DELETE}
                  size={fonts.iconSize.sm}
                  color={color.icon.deleteIcon}
                />
                <Text style={styles.iconText}>
                  {STRINGCONSTANT.BUTTONS.DELETE}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
