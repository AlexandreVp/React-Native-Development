import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const useSharedValue = () => {

    return (
        <View style={styles.container}>
            <Text>oi</Text>
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
    }
})

export default useSharedValue;