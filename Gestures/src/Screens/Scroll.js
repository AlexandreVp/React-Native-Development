import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate } from "react-native-reanimated";

import taylorImg from '../../assets/images/taylor.jpg';

const Scroll = () => {

    //How much the user scrolled
    const scrollY = useSharedValue(0);

    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 180],
                [300, 100],
                Extrapolate.CLAMP
            )
        };
    });

    const avatarStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [100, 155],
                [1, 0],
                Extrapolate.CLAMP
            )
        };
    });

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });

    return (
        <>
            <Animated.View style={[styles.header, headerStyle]}>
                <Animated.Image style={[styles.avatar, avatarStyle]} source={taylorImg}/>
                <Text style={styles.name}>Taylor Swift</Text>
            </Animated.View>

            <Animated.ScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingTop: 300 }}
            >
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
                <Text style={styles.listItem}>List item</Text>
            </Animated.ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 300,
        backgroundColor: '#6c63ff',
        paddingVertical: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',

        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1,
        elevation: 1
    },
    avatar: {
        height: 140,
        width: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        color: '#fff'
    },
    listItem: {
        padding: 20,
        fontSize: 18
    }
})

export default Scroll;