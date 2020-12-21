import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import Colors from '../Constants/Colors';
import Box from '../Components/Box';

const UseAnimatedStyle = () => {

    const width = useSharedValue(50);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value
        }
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
            <RectButton style={styles.button} onPress={() => (
                width.value = Math.random() * 300
            )}>
                <Text style={{color: 'white'}}>Button</Text>
            </RectButton>
        </View>
    );
}

export const screenOptions =  {
    headerTitle: 'useAnimatedStyle'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 30,
        marginBottom: 100,
        backgroundColor: Colors.primary
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 20,
    }
})

export default UseAnimatedStyle;