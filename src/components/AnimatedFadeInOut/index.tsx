import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Animated, Easing } from 'react-native';
import metrics from '../../metrics';

type AnimatedSlideFadeInOutProps = {
  children: React.ReactNode;
}

export const AnimatedFadeInOut : FunctionComponent<AnimatedSlideFadeInOutProps> = ({children}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
    const [isFade, setIsFade] = useState(true);

    const startAnimation = (toValue: number) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            setIsFade(!isFade);
        })
    }

    useEffect(() => {
        startAnimation(isFade ? 1 : 0);
    }, [isFade]);

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp"
    })
  return (
    <Animated.View style={{opacity: opacity}}>
        {children}
    </Animated.View>
  )
}
