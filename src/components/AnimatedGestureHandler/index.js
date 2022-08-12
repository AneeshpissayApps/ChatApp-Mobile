import React from 'react';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
  } from 'react-native-reanimated';
  import { PanGestureHandler } from 'react-native-gesture-handler';
  
export const AnimatedGestureHandler = (props) => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
  
    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx) => {
        ctx.startX = x.value = props.captureX.value;
        ctx.startY = y.value = props.captureY.value;
      },
      onActive: (event, ctx) => {
        if(event.translationX < 0) {
            x.value = ctx.startX + event.translationX;
            y.value = 0;
            props.captureX.value = ctx.startX + event.translationX;
            props.captureY.value = 0;
        }
        else if(event.translationY < 0) {
            x.value = 0;
            y.value = ctx.startY + event.translationY;
            props.captureX.value = 0;
            props.captureY.value = ctx.startY + event.translationY;
        }
      },
      onEnd: (_) => {
        x.value = withSpring(0);
        y.value = withSpring(0);
        props.captureX.value = withSpring(0);
        props.captureY.value = withSpring(0);
      },
    });
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: y.value,
          },
          {
            translateX: x.value
          }
        ],
      };
    });
  
    return (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle]}>
            {props.children}
        </Animated.View>
      </PanGestureHandler>
    );
}