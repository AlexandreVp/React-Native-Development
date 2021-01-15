import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window')

const tapGestureHandler = () => {

    const onTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (event.nativeEvent.x < width/2) {
                alert('Left click')
            } else {
                alert('Right click')
            }
        }
    }

    const onDoubleTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('Double tap! You\'re Fast!')
        }
    }

    return (
        <View style={styles.container}>
            <TapGestureHandler onHandlerStateChange={onTap} maxDist={10} numberOfTaps={1}>
                <TapGestureHandler maxDist={10} onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
                    <View style={styles.box}>
                        <Text>Tap Here</Text>
                    </View>
                </TapGestureHandler>
            </TapGestureHandler>
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
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: width,
        borderWidth: 1
    },
})

export default tapGestureHandler;