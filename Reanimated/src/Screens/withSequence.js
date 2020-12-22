import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withSequence,
    EasingNode
} from 'react-native-reanimated';

import Colors from '../Constants/Colors';

const WithSequence = () => {

    const width = useSharedValue(150);

    const boxStyle = useAnimatedStyle(() => {
        return {
            width: withSequence(
                withTiming(width.value, {
                    duration: 300,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                }),
                withTiming(width.value - 100, {
                    duration: 300,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                }),
                withTiming(width.value, {
                    duration: 300,
                    easing: EasingNode.bezier(0.25, 0.1, 0.25, 1),
                }),
            ),
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, boxStyle]} />
            <Button onPress={() => (width.value = Math.random()*100 + 200)} title="Press me" color={Colors.secondary}/>
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

export default WithSequence;