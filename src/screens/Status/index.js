import React from 'react'
import { ScrollView } from 'react-native'
import { List, Caption } from 'react-native-paper';
import moment from "moment";

const Status = () => {
  return (
    <ScrollView>
        <List.Item
          title="My Status"
          description="Tap to add status update"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Section>
            <List.Subheader>Recent Updates</List.Subheader>
            <List.Item
                title="Yogesh S"
                description="12 minutes ago"
                left={props => <List.Icon {...props} icon="folder" />}
            />
        </List.Section>
        <List.Section>
            <List.Subheader>Viewed Updates</List.Subheader>
            <List.Item
                title="Madhusudan Sir"
                description="12 minutes ago"
                left={props => <List.Icon {...props} icon="folder" />}
            />
        </List.Section>
    </ScrollView>
  )
}

export default Status;