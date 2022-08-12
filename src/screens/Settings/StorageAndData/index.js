import React from 'react'
import { ScrollView } from 'react-native'
import { Caption, Divider, List } from 'react-native-paper'

const StorageAndData = () => {
    return (
        <ScrollView>
            <List.Item
                title="Manage storage"
                description="1.6 GB"
                left={props => <List.Icon icon="folder" />}
            />
            <Divider />
            <List.Section>
                <List.Subheader>Network Usage</List.Subheader>
                <List.Item
                    title="Sent"
                    description="1.2 GB"
                />
                <List.Item
                    title="Received"
                    description="14.6 GB"
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Media auto-download</List.Subheader>
                <Caption style={{ margin: 20 }}>Voice messages are always automatically downloaded</Caption>
                <List.Item
                    title="When using mobile data"
                    description="Photos"
                />
                <List.Item
                    title="When connected to Wi-Fi"
                    description="All media"
                />
                <List.Item
                    title="When roaming"
                    description="No media"
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Media upload-quality</List.Subheader>
                <Caption style={{ margin: 20 }}>Choose the quality of media files to be sent</Caption>
                <List.Item
                    title="Photo upload quality"
                    description="Auto (recommended)"
                />
            </List.Section>
        </ScrollView>
    )
}

export default StorageAndData