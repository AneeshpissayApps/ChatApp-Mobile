import React from 'react'
import { View } from 'react-native'
import { Avatar, Caption, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getAvatarLabel } from '../../utils/avatar'

export const StarredMessage = () => {
    return (
        <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row" }}>
                <Avatar.Text label={getAvatarLabel("Mamma")} size={25} />
                <Caption style={{ marginLeft: 10 }}>Mamma</Caption>
                <Icon name="menu-right" size={20} />
                <Caption>You</Caption>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Caption style={{width: 75}} numberOfLines={1}>07/05/2022</Caption>
                <Icon name='chevron-right' size={20} />
            </View>
        </View>
    )
}
