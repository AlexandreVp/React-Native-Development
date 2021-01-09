import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const tapGestureHandler = () => {

    const onTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('One tap');
        }
    }

    const onDoubleTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('Double tap! You\'re Fast!')
        }
    }

    return (
        <View style={styles.container}>
            <TapGestureHandler onHandlerStateChange={onTap} numberOfTaps={1}>
                <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
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
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderWidth: 1
    },
})

export default tapGestureHandler;