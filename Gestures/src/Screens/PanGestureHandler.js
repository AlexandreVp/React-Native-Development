import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import Colors from '../Constants/Colors';

const CIRCLE_RADIUS = 30;

const panGestureHandler = () => {

    const touchX = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.posX = touchX.value
        },
        onActive: (event, context) => {
            touchX.value = context.posX + event.translationX
        }
    });

    const circleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: touchX.value }
            ]
        }
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={styles.box}>
                    <Animated.View style={[styles.circle, circleStyle]}/>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        justifyContent: 'center',
        height: 200,
        borderWidth: 1
    },
    circle: {
        backgroundColor: Colors.secondary,
        width: CIRCLE_RADIUS*2,
        height: CIRCLE_RADIUS*2,
        borderRadius: CIRCLE_RADIUS
    }
})

export default panGestureHandler;