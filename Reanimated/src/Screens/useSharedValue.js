import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';

import Colors from '../Constants/Colors';

const UseSharedValue = () => {

    const [wState, setWState] = useState(50)

    const width = useSharedValue(wState);
    
    // console.log(width.value);

    return (
        <View style={styles.container}>
            <View style={{...styles.view, width: width.value}} />
            <RectButton style={styles.button} onPress={() => {
                // width.value = Math.random() * 300
                setWState(Math.random() * 300)
            }}>
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
    view: {
        height: 30,
        marginBottom: 100,
        backgroundColor: Colors.primary
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#75c',
        borderRadius: 20,
    }
})

export default UseSharedValue;