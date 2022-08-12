import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { List } from 'react-native-paper'

const Account = () => {
    const navigation = useNavigation();
    return (
        <View>
            <List.Item
                title="Privacy"
                left={props => <List.Icon icon="lock" />}
                onPress={() => navigation.navigate("Privacy")}
            />
            <List.Item
                title="Security"
                left={props => <List.Icon icon="security" />}
            />
            <List.Item
                title="Two-step verification"
                left={props => <List.Icon icon="lock-plus" />}
            />
            <List.Item
                title="Change number"
                left={props => <List.Icon icon="cellphone-arrow-down" />}
            />
            <List.Item
                title="Request account info"
                left={props => <List.Icon icon="file-document" />}
            />
            <List.Item
                title="Delete my account"
                left={props => <List.Icon icon="delete" />}
            />
        </View>
    )
}

export default Account;