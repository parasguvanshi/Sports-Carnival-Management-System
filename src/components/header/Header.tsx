import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './headerStyle';
import LogoutButton from '../logoutbutton/LogoutButton';
import { STRING } from '../../constant/stringConstant';
import { fonts } from '../../theme/fontsConstants';

type Prop = {
  name: string;
};

const Header = ({ name }: Prop) => {
  return (
    <View style={styles.header}>
      <View style={styles.profile}>
        <Icon name={STRING.ICON.PERSON} size={fonts.fontSizes.xxl} />
      </View>

      <Text style={styles.headerTitle}>{name}</Text>

      <View style={styles.headerRight}>
        <LogoutButton />
      </View>
    </View>
  );
};

export default Header;
