import React from 'react'
import { StatusBar, View } from 'react-native';
import { splashScreenStyles } from '../../styles/SplashScreenStyles';
import Lottie from 'lottie-react-native';
import { colors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';

const SplashScreen = () => {
    const { appTheme } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={appTheme(colors.white, colors.background)} barStyle="light-content" />
            <View style={splashScreenStyles.logo}>
                {appTheme(<Lottie speed={0.5} loop={false} onAnimationFinish={() => navigation.replace("Home")} source={require('../../assets/lottie/lottie_splash_blue_logo.json')} autoPlay />, <Lottie speed={0.5} loop={false} onAnimationFinish={() => navigation.replace("Home")} source={require('../../assets/lottie/lottie_splash_dark_logo.json')} autoPlay />)}
            </View>
            <View style={splashScreenStyles.branding}>
                {appTheme(<Lottie speed={0.5} source={require('../../assets/lottie/lottie_splash_blue_brand_logo.json')} autoPlay style={{ width: 100 }} />, <Lottie speed={0.5} source={require('../../assets/lottie/lottie_splash_dark_brand_logo.json')} autoPlay style={{ width: 100 }} />)}
            </View>
        </View>
    )
}

export default SplashScreen;