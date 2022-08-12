import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Animated, Easing } from 'react-native';
import metrics from '../../metrics';

type AnimatedSlideInDownProps = {
  children: React.ReactNode;
  start: number;
  end: number;
}

export const AnimatedSlideInDown : FunctionComponent<AnimatedSlideInDownProps> = ({children, start, end}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
    const [isTop, setIsTop] = useState(true);

    const startAnimation = (toValue: number) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            setIsTop(!isTop);
        })
    }

    useEffect(() => {
        startAnimation(isTop ? 1 : 0);
    }, [isTop]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [start, end],
        extrapolate: "clamp"
    })
  return (
    <Animated.View style={[{transform: [{translateY: translateY}]}]}>
        {children}
    </Animated.View>
  )
}
