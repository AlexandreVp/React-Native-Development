import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedProps } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import Colors from '../Constants/Colors';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const UseAnimatedProps = () => {

    const radius = useSharedValue(50);

    // draw a circle
    const path = `
    M 100, 100
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `;

    const animatedProps = useAnimatedProps(() => {
        return {
            d: path
        }
    });

    return (
        <View style={styles.container}>
            <Svg>
                <AnimatedPath animatedProps={animatedProps} fill={Colors.primary} />
            </Svg>
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
})

export default UseAnimatedProps;