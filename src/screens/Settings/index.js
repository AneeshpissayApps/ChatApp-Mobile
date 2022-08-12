import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView } from 'react-native';
import { Avatar, Divider, IconButton, List } from 'react-native-paper';
import { colors } from '../../assets/colors';
import { settingsStyles } from '../../styles/SettingsStyles';
import { getAvatarLabel } from '../../utils/avatar';

const Settings = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, margin: 10 }}>
            <List.Item
                title="Aneesh Pissay"
                description="Available"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <Avatar.Text size={45} style={{ backgroundColor: colors.blue }} label={getAvatarLabel("Aneesh Pissay")} />}
                right={props => <IconButton onPress={() => navigation.navigate("QR Code")} icon="qrcode" color={colors.green} />}
                onPress={() => navigation.navigate("Profile")}
            />
            <Divider />
            <List.Item
                title="Account"
                description="Privacy, security, change number"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="key-variant" />}
                onPress={() => navigation.navigate("Account")}
            />
            <List.Item
                title="Chats"
                description="Theme, wallpapers, chat history"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="message-text" />}
                onPress={() => navigation.navigate("Chats")}
            />
            <List.Item
                title="Notifications"
                description="Message, group & call tones"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="bell" />}
                onPress={() => navigation.navigate("Notifications")}
            />
            <List.Item
                title="Storage and data"
                description="Network usage, auto-download"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="database" />}
                onPress={() => navigation.navigate("Storage and data")}
            />
            <List.Item
                title="App language"
                description="English (phone's language)"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="web" />}
            />
            <List.Item
                title="Help"
                description="Help centre, contact us, privacy policy"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="help-circle-outline" />}
                onPress={() => navigation.navigate("Help")}
            />
            <List.Item
                title="Invite a friend"
                left={props => <List.Icon icon="account-multiple" />}
            />
        </ScrollView>
    )
}

export default Settings;
