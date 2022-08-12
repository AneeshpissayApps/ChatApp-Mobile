import React from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

const Help = () => {
    return (
        <ScrollView>
            <List.Item
                title="Help Centre"
                left={props => <List.Icon icon="help-circle-outline" />}
            />
            <List.Item
                title="Contact us"
                description="Questions? Need help?"
                left={props => <List.Icon icon="account-multiple" />}
            />
            <List.Item
                title="Terms and Privacy Policy"
                left={props => <List.Icon icon="file-document" />}
            />
            <List.Item
                title="App info"
                left={props => <List.Icon icon="information-outline" />}
            />
        </ScrollView>
    )
}

export default Help