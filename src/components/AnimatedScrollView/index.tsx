import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { animatedScrollViewStyles } from '../../styles/AnimatedScrollViewStyles';
import { ScrollViewPage } from './ScrollViewPage';

const IMAGES = ["https://img.lovepik.com/feishe/40050/2897.jpg!bdetail650", "https://wallpaper.dog/large/20492556.jpg", "https://img.lovepik.com/background/20211102/small/lovepik-abstract-color-background-mobile-phone-wallpaper-image_400882289.jpg"];

export const AnimatedScrollView = () => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const scaleValue = useSharedValue(1);
    useEffect(() => {
        const interval = setInterval(() => {
            if(scaleValue.value > 1 || scaleValue.value < 1) {
                setScrollEnabled(false);
            }
            else {
                setScrollEnabled(true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={scrollEnabled}
            style={animatedScrollViewStyles.container}
        >
            {IMAGES.map((image, index) => (
                <ScrollViewPage
                    key={index.toString()}
                    image={image}
                    scaleValue={scaleValue}
                />
            ))}
        </ScrollView>
    )
}

