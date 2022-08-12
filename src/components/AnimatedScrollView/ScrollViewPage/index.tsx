import React from 'react'
import { Image } from 'react-native'
import { PinchGestureHandler, PinchGestureHandlerGestureEvent, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { SharedValue, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import metrics from '../../../metrics';

interface ScrollViewPageProps {
    image: string;
    scaleValue: SharedValue<number>;
}

type ContextType = {
    scale: number;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

export const ScrollViewPage: React.FC<ScrollViewPageProps> = ({ image, scaleValue }) => {
    const scale = useSharedValue(1);
    const focalX = useSharedValue(0);
    const focalY = useSharedValue(0);
    const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            context.scale = scale.value;
        },
        onActive: (event, context) => {
            if(event.scale < 0.8) {
                scale.value = scale.value;
                scaleValue.value = scale.value;
            }
            else {
                scale.value = (event.scale - 1) + context.scale;
                scaleValue.value = (event.scale - 1) + context.scale;
                focalX.value = event.focalX;
                focalY.value = event.focalY;
            }
        },
        onEnd: () => {
            if(scale.value < 1) {
                scale.value = withSpring(1);
                scaleValue.value = withSpring(1);
            }
        }
    });
    
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: focalX.value},
                {translateY: focalY.value},
                {translateX: -metrics.screenWidth / 2},
                {translateY: -metrics.screenHeight / 2},
                {scale: scale.value},
                {translateX: -focalX.value},
                {translateY: -focalY.value},
                {translateX: metrics.screenWidth / 2},
                {translateY: metrics.screenHeight / 2},
            ]
        }
    });
    const doubleTap = (event: any) => {
        if(scale.value > 1) {
            scale.value = withSpring(1);
            scaleValue.value = withSpring(1);
        }
        else {
            scale.value = withSpring(2);
            scaleValue.value = withSpring(2);
            focalX.value = event.nativeEvent.absoluteX;
            focalY.value = event.nativeEvent.absoluteY;
        }
    }
    return (
        <PinchGestureHandler onGestureEvent={pinchHandler}>
            <Animated.View>
            <TapGestureHandler
                numberOfTaps={2}
                onActivated={doubleTap}
            >
                <AnimatedImage
                    source={{ uri: image }}
                    style={[{ width: metrics.screenWidth, height: metrics.screenHeight, flex: 1 }, rStyle]}
                />
            </TapGestureHandler>
            </Animated.View>
        </PinchGestureHandler>
    )
}
