import React from 'react'
import { ScrollView } from 'react-native'
import { Divider, List, Switch } from 'react-native-paper';

const Notifications = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <ScrollView>
            <List.Item
                title="Conversation tones"
                description="Play sounds for incoming and outgoing messages"
                right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
            />
            <Divider />
            <List.Section>
                <List.Subheader>Messages</List.Subheader>
                <List.Item
                    title="Notification tone"
                    description="Default"
                />
                <List.Item
                    title="Vibrate"
                    description="Default"
                />
                <List.Item
                    title="Light"
                    description="White"
                />
                <List.Item
                    title="Use high priority notifications"
                    description="Show previous of notifications at the top of the screen"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
                <List.Item
                    title="Reaction Notifications"
                    description="Show notifications for reactions to message you send"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Group</List.Subheader>
                <List.Item
                    title="Notification tone"
                    description="Default"
                />
                <List.Item
                    title="Vibrate"
                    description="Default"
                />
                <List.Item
                    title="Light"
                    description="White"
                />
                <List.Item
                    title="Use high priority notifications"
                    description="Show previous of notifications at the top of the screen"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
                <List.Item
                    title="Reaction Notifications"
                    description="Show notifications for reactions to message you send"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Calls</List.Subheader>
                <List.Item
                    title="Ringtone"
                    description="Default"
                />
                <List.Item
                    title="Vibrate"
                    description="Default"
                />
            </List.Section>
        </ScrollView>
    )
}

export default Notifications