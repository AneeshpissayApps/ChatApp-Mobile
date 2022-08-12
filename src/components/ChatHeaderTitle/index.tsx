import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { Avatar, Caption, Text } from 'react-native-paper'
import { chatHeaderTitleStyles } from '../../styles/ChatHeaderStyles';
import { getAvatarLabel } from '../../utils/avatar';

type ChatHeaderTitleProps = {
    title: string;
}

export const ChatHeaderTitle: FunctionComponent<ChatHeaderTitleProps> = ({title}) => {
    return (
        <View style={chatHeaderTitleStyles.chatHeaderContainer}>
            <Avatar.Text size={40} style={chatHeaderTitleStyles.chatHeaderAvatar} label={getAvatarLabel(title)} />
            <View style={chatHeaderTitleStyles.chatHeaderInfoContainer}>
                <Text style={chatHeaderTitleStyles.chatHeaderInfoTitle}>{title}</Text>
                <Caption style={chatHeaderTitleStyles.chatHeaderInfoCaption}>Online</Caption>
            </View>
        </View>
    )
}
