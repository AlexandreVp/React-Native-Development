import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { useDerivedValue, useSharedValue } from 'react-native-reanimated';

import Colors from '../Constants/Colors';
import Box from '../Components/Box';

const UseDerivedValue = () => {

    const progress = useSharedValue(0);

    const width = useDerivedValue(() => {
        return progress.value * 250;
    });

    return (
        <View style={styles.container}>
            <Box width={width.value} />
            <RectButton style={styles.button} onPress={() => (
                progress.value = Math.random()
            )}>
                <Text style={{color: 'white'}}>Button</Text>
            </RectButton>
        </View>
    );
}

export const screenOptions =  {
    headerTitle: 'useSharedValue'
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

export default UseDerivedValue;