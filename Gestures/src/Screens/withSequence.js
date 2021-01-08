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

    const width = useSharedValue(50);

    const boxStyle = useAnimatedStyle(() => {
        return {
            width: width.value
        };
    });

    const animate = () => {
        width.value = withSequence(
            withTiming(200, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            withTiming(125, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            withTiming(300, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            })
        )
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, boxStyle]} />
            <Button onPress={animate} title="Press me" color={Colors.secondary}/>
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