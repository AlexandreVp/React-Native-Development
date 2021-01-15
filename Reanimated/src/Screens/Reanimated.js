import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
    Extrapolate,
    withSequence
} from "react-native-reanimated";

import Colors from '../Constants/Colors';
import heroImg from '../../assets/images/hero.png';

const Reanimated = () => {

    const titlePosition = useSharedValue(200);
    const imagePosition = useSharedValue(-60);
    // const titleOpacity = useSharedValue(0);

    useEffect(() => {
        imagePosition.value = withTiming(0, {
            duration: 600,
            easing: Easing.bezier(.50,.1,.20,.95),
        }, () => {
            titlePosition.value = withSequence( 
                withTiming(0, {
                    duration: 1000,
                    easing: Easing.bezier(.50,.1,.20,.95),
                }),
                withTiming(20, {
                    duration: 1000,
                    easing: Easing.bezier(.50,.1,.20,.95),
                }),
            );
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
                [200, 20],
                [0, 1],
                Extrapolate.CLAMP,
            )
            // opacity: titleOpacity.value,
        };
    });

    const heroStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: imagePosition.value }
            ],
        }
    });

    return (
        <View style={styles.container}>
            <Animated.Image source={heroImg} style={[styles.hero, heroStyle]}/>
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
    hero: {
        width: 288,
        height: 200,
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 32,
    }
})

export default Reanimated;