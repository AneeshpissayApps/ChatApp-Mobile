import React, { useRef, useState } from 'react'
import { ScrollView, ToastAndroid, View } from 'react-native'
import { Divider, FAB, List, Text } from 'react-native-paper';
import { colors } from '../../assets/colors';
import { UserAvatar } from '../../components/UserAvatar';
import useContacts from '../../hooks/useContacts'
import { fabStyles } from '../../styles/FabStyles';
import { randomAvatarColor } from '../../utils/avatar';
import { groupedContacts } from '../../utils/contacts';

const NewBroadCast = ({ user }) => {
    const { contacts } = useContacts();
    const groupContacts = groupedContacts(contacts, user);
    const [selectedUser, setSelectedUser] = useState([]);
    const scrollViewRef = useRef(null);
    return (
        <View style={{ flex: 1 }}>
            <FAB
                icon="arrow-right"
                color={colors.white}
                style={fabStyles.fab}
                onPress={() => {
                    if (selectedUser.length > 0) {
                        console.log(contacts[0])
                    }
                    else {
                        ToastAndroid.show("At least 1 contact must be selected", ToastAndroid.LONG);
                    }
                }}
            />
            {selectedUser.length > 0 && <ScrollView ref={scrollViewRef} onContentSizeChange={(w, h) => scrollViewRef?.current?.scrollToEnd({ animated: true })} horizontal style={{ margin: 10 }}>
                {selectedUser.map((user, index) => (
                    <UserAvatar
                        user={user.name}
                        selected
                        icon="close"
                        style={{ margin: 10 }}
                        key={index.toString()}
                        color={user.color}
                        bottom={-10}
                        onPress={() => {
                            let newSelectedUsers = [...selectedUser];
                            newSelectedUsers.splice(index, 1);
                            setSelectedUser(newSelectedUsers);
                        }}
                    />
                ))}
            </ScrollView>}
            {selectedUser.length > 0 && <Divider />}
            <ScrollView>
                {groupContacts.length > 0 ? groupContacts.map((contact, index) => (
                    <List.Item
                        key={index.toString()}
                        title={contact.displayName}
                        style={{ margin: 5 }}
                        onPress={() => {
                            let newSelectedUsers = [...selectedUser];
                            if (newSelectedUsers.some((e) => e.name === contact.displayName)) {
                                newSelectedUsers.splice(newSelectedUsers.map((e) => { return e.name; }).indexOf(contact.displayName), 1);
                                setSelectedUser(newSelectedUsers);
                                return;
                            }
                            newSelectedUsers.push({ name: contact.displayName, color: randomAvatarColor(contacts)[index], phone: contact.phoneNumbers });
                            setSelectedUser(newSelectedUsers);
                        }}
                        left={props => <UserAvatar
                            user={contact.displayName}
                            selected={selectedUser.some((e) => e.name === contact.displayName) ? true : false}
                            key={index.toString()}
                            color={randomAvatarColor(contacts)[index]}
                        />}
                    />
                )) : <Text style={{ textAlign: "center", fontSize: 16, margin: 10 }}>No results found for '{user}'</Text>}
            </ScrollView>
        </View >
    )
}

export default NewBroadCast;