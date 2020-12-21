import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

import Colors from '../Constants/Colors';

const WithTiming = () => {

    const width = useSharedValue(50);

    const boxStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, boxStyle]} />
            <Button onPress={() => (width.value = Math.random() * 300)} title="Press me" color={Colors.secondary}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        height: 30,
        marginBottom: 100,
        backgroundColor: Colors.primary
    },
})

export default WithTiming;