import React from 'react'
import { ScrollView } from 'react-native'
import { Avatar, Button, IconButton, List } from 'react-native-paper';
import { colors } from '../../assets/colors';
import useContacts from '../../hooks/useContacts';
import { getAvatarLabel, randomAvatarColor } from '../../utils/avatar';
import { groupedContacts } from '../../utils/contacts';

const SelectContact = () => {
    const { contacts } = useContacts();
    const groupContacts = groupedContacts(contacts, "");
    return (
        <ScrollView>
            <List.Item
                title="New group"
                left={props => <List.Icon icon="account-group" style={{ backgroundColor: colors.green, borderRadius: 100 }} />}
            />
            <List.Item
                title="New contact"
                left={props => <List.Icon icon="account-plus" style={{ backgroundColor: colors.green, borderRadius: 100 }} />}
                right={(props) => <IconButton {...props} icon="qrcode" />}
            />
            <List.Section>
                <List.Subheader>Contacts on ChatApp</List.Subheader>
            </List.Section>
            <List.Section>
                <List.Subheader>Invite to ChatApp</List.Subheader>
                {groupContacts.map((contact, index) => (
                    <List.Item 
                        key={index.toString()}
                        title={contact.displayName}
                        style={{margin: 5}}
                        left={props => <Avatar.Text size={40} style={{backgroundColor: randomAvatarColor(contacts)[index]}} labelStyle={{fontSize: 14}} label={getAvatarLabel(contact.displayName)} />}
                        right={props => <Button mode="text" color={colors.green}>Invite</Button>}
                    />
                ))}
            </List.Section>
            <List.Item
                title="Share invite link"
                left={props => <List.Icon icon="share-variant" style={{ backgroundColor: colors.header, borderRadius: 100 }} />}
            />
            <List.Item
                title="Contacts help"
                left={props => <List.Icon icon="help" style={{ backgroundColor: colors.header, borderRadius: 100 }} />}
            />
        </ScrollView>
    )
}

export default SelectContact;