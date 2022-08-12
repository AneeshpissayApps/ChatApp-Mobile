import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../assets/colors'
import useTheme from '../../hooks/useTheme'
import { loadingStyles } from '../../styles/LoadingStyles'

export const LoadingIndicator = () => {
    const { appTheme } = useTheme();
    return (
        <View style={loadingStyles.container}>
            <ActivityIndicator animating={true} color={appTheme(colors.blue, colors.white)} />
        </View>
    )
}
