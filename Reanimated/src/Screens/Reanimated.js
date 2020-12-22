import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
    Extrapolate
} from "react-native-reanimated";

import Colors from '../Constants/Colors';

const Reanimated = () => {

    const titlePosition = useSharedValue(200);
    // const titleOpacity = useSharedValue(0);

    useEffect(() => {
        titlePosition.value = withTiming(0, {
            duration: 1000,
            easing: Easing.bezier(.50,.1,.20,.95),
        });

        // titleOpacity.value = withTiming(1, {
        //     duration: 1000,
        //     easing: Easing.bezier(.50,.1,.20,.95)
        // });
    }, []);

    const titleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: titlePosition.value }
            ],
            opacity: interpolate(
                titlePosition.value,
                [200, 0],
                [0, 1],
                Extrapolate.CLAMP,
            )
            // opacity: titleOpacity.value,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, titleStyle]}>Let's animate!!!</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 32,
    }
})

export default Reanimated;