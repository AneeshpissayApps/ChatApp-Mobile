import React from 'react'
import { Image, View } from 'react-native';
import { Button, Caption, Text } from 'react-native-paper';
import { colors } from '../../assets/colors';
import metrics from '../../metrics';

const LinkedDevices = () => {
    return (
        <View>
            <Image
                source={require("../../assets/images/LinkedDevices.png")}
                resizeMode="contain"
                style={{ width: metrics.screenWidth, height: metrics.screenHeight * 0.28 }}
            />
            <Text style={{ textAlign: "center", fontSize: 20 }}>Use ChatApp on other devices</Text>
            <Button mode="contained" color={colors.green} style={{ margin: 20 }}>Link a device</Button>
            <View style={{ alignSelf: "center", marginVertical: 50 }}>
                <Caption numberOfLines={3} style={{ width: metrics.screenWidth * 0.7, textAlign: "center" }}>Use ChatApp on web, desktop or other devices without keeping your phone online.</Caption>
                <Caption style={{ color: colors.blue, textAlign: "center" }}>Learn more</Caption>
            </View>
        </View>
    )
}

export default LinkedDevices;