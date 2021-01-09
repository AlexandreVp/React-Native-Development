import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const longPressGestureHandler = () => {

    const onHold = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('Yaaay! Long press Handler');
        }
    }

    return (
        <View style={styles.container}>
            <LongPressGestureHandler minDurationMs={600} maxDist={10} onHandlerStateChange={onHold}>
                <View style={styles.box}>
                    <Text>Hold</Text>
                </View>
            </LongPressGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderWidth: 1
    },
})

export default longPressGestureHandler;