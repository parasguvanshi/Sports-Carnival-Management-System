import React from 'react';
import { FlatList} from 'react-native';
import Header from '../../components/header/Header';
import styles from './userManagementScreenStyle';
import UserListItem from '../../components/userlist/UserListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userManagementViewModel } from '../../viewmodels/userManagementViewModal';
import { STRINGCONSTANT } from '../../constant/stringConstant';

const UserManagementScreen = () => {
  const { users, handleDeleteUser } =
    userManagementViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <Header name={STRINGCONSTANT.HEADER.USER_MANAGEMENT} />

      <FlatList
        data={users}
        keyExtractor={item => item.email} 
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <UserListItem
            user={item}
            onDelete={() => handleDeleteUser(item.email)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default UserManagementScreen;
