import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../../navigation/Navigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import styles from './UserRoleScreenStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';


type props = NativeStackScreenProps<RootStackParamList , 'UserRole'>

interface user  {
    id :string,
    title : string,
    icon : string,
    description : string
}

const roles : user[]  = [
  {
    id: 'admin',
    title: 'Admin',
    icon: 'admin-panel-settings',
    description: 'Admins have full access to the system. They can manage users monitor activities',
  },
  {
    id: 'organizer',
    title: 'Organizer',
    icon: 'event',
    description: 'Organizers can create, update, and manage events. They handle registrations, schedule of event',
  },
  {
    id: 'participant',
    title: 'Participant',
    icon: 'person',
    description: 'Participants can browse events, register, receive notifications, and actively take part in activities.',
  },
];

const UserRoleScreen = ({navigation} : props) => {

  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Text style={styles.subtitle}>Choose how you’ll use the app</Text>

      {roles.map(role => (
        <TouchableOpacity
          key={role.id}
          style={[
            styles.card,
            selectedRole === role.id && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole(role.id)}
        >
          <Icon
            name={role.icon}
            size={28}
            color= '#000'
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>{role.title}</Text>
          <Text style={styles.cardDescription}>
            {role.description}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.button,
          !selectedRole && styles.disabledButton,
        ]}
        disabled={!selectedRole}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

export default UserRoleScreen

