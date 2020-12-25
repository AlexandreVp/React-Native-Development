import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, useAnimatedReaction } from 'react-native-reanimated';

const UseAnimatedReaction = () => {

    const translationX = useSharedValue(0);
    const translationX_2 = useSharedValue(0);

    useAnimatedReaction(
        () => {
            return translationX.value * 1.5;
        },
        (data) => { // data holds what was returned from the first worklet's execution
            translationX_2.value = data;
        }
    );

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationX.value = event.contentOffset.y;
    });

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translationX.value },
            ]
        };
    });

    const box2_Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translationX_2.value },
            ]
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.boxesContainer}>
                <Animated.View style={[styles.box, boxStyle]}/>
                <Animated.View style={[styles.box, box2_Style]}/>
            </View>
            <Animated.ScrollView
                style={{borderWidth: 1}}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "#2d2d86",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        elevation: 1,
    },
    listItem: {
        padding: 20,
        fontSize: 18
    }
})

export default UseAnimatedReaction;