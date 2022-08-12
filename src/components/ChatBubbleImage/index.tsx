import React, { FunctionComponent } from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import { colors } from '../../assets/colors'
import metrics from '../../metrics'

type ChatBubbleImageProps = {
    reverse?: boolean;
    src: string;
    time: string;
}

export const ChatBubbleImage: FunctionComponent<ChatBubbleImageProps> = ({ reverse, src, time }) => {
    return (
        <View style={{ backgroundColor: colors.blue, borderRadius: 10, padding: 7, margin: 10, alignSelf: reverse ? "flex-end" : "flex-start", maxWidth: metrics.screenWidth * 0.7, minWidth: metrics.screenWidth * 0.2 }}>
            <Image
                source={{ uri: src }}
                style={{ width: metrics.screenWidth * 0.66, height: metrics.screenWidth * 0.66, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 10, position: "absolute", right: 10, bottom: 15, textShadowOffset: {width: 2, height: 2}, textShadowRadius: 10, textShadowColor: colors.background}}>{time}</Text>
        </View>
    )
}
