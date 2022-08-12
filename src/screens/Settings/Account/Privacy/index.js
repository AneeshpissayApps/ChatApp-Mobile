import React from 'react'
import { ScrollView } from 'react-native'
import { Divider, List, Switch, Text } from 'react-native-paper';

const Privacy = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <ScrollView>
            <List.Section>
                <List.Subheader>Who can see my personal info</List.Subheader>
                <List.Item
                    title="Last seen"
                    description="Everyone"
                />
                <List.Item
                    title="Profile photo"
                    description="Everyone"
                />
                <List.Item
                    title="About"
                    description="Everyone"
                />
                <List.Item
                    title="Status"
                    description="My contacts"
                />
                <List.Item
                    title="Read receipts"
                    descriptionNumberOfLines={3}
                    description="If turned off, you won't send or receive Read receipts. Read receipts are always sent for group chats."
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Disappearing messages</List.Subheader>
                <List.Item
                    title="Default message timer"
                    description="Start new chats with disappearing messages set to your timer"
                    right={props => <Text>Off</Text>}
                />
            </List.Section>
            <Divider />
            <List.Item
                title="Groups"
                description="Everyone"
            />
            <List.Item
                title="Live Location"
                description="None"
            />
            <List.Item
                title="Blocked Contacts"
                description="31"
            />
            <List.Item
                title="Fingerprint lock"
                description="Enabled after 30 minutes"
            />
        </ScrollView>
    )
}

export default Privacy;