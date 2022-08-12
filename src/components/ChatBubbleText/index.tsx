import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { colors } from '../../assets/colors'
import metrics from '../../metrics'

type ChatBubbleTextProps = {
  reverse?: boolean;
  value: string;
  time: string;
}

export const ChatBubbleText: FunctionComponent<ChatBubbleTextProps> = ({ reverse, value, time }) => {
  return (
    <View style={{ backgroundColor: colors.blue, borderRadius: 10, padding: 7, paddingBottom: 14, margin: 10, alignSelf: reverse ? "flex-end" : "flex-start", maxWidth: metrics.screenWidth * 0.7, minWidth: metrics.screenWidth * 0.2 }}>
      <Text>{value}</Text>
      <Text style={{ fontSize: 10, position: "absolute", right: 5, bottom: 0 }}>{time}</Text>
    </View>
  )
}
