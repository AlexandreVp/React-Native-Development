import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler } from 'react-native-reanimated';

const UseAnimatedScrollHandler = () => {

    const translationY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
    });

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: translationY.value },
            ]
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, boxStyle]}/>
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
        position: 'absolute',
    },
    listItem: {
        padding: 20,
        fontSize: 18
    }
})

export default UseAnimatedScrollHandler;