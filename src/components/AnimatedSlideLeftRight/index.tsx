import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Animated, Easing, ViewStyle } from 'react-native';

type AnimatedSlideLeftRightProps = {
  children: React.ReactNode;
  start: number;
  end: number;
  styles?: ViewStyle;
  duration?: number;
}

export const AnimatedSlideLeftRight : FunctionComponent<AnimatedSlideLeftRightProps> = ({children, start, end, styles, duration}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
    const [isLeft, setIsLeft] = useState(true);

    const startAnimation = (toValue: number) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: duration || 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            setIsLeft(!isLeft);
        })
    }

    useEffect(() => {
        startAnimation(isLeft ? 1 : 0);
    }, [isLeft]);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [start, end],
        extrapolate: "clamp"
    })
  return (
    <Animated.View style={[{transform: [{translateX: translateX}]}, styles]}>
        {children}
    </Animated.View>
  )
}
