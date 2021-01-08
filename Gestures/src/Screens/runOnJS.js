import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {
    useSharedValue,
    runOnJS,
    useDerivedValue
} from 'react-native-reanimated';
  
export default function App() {
    const randomWidth = useSharedValue(10);
    const lastResults = [];
  
    const recordResult = (result) => {
        lastResults.push(result);
        if (lastResults.length > 3) {
            lastResults.shift();
        }
        console.log(lastResults);
    }
    
    useDerivedValue(() => {
        runOnJS(recordResult)(randomWidth.value);
    });

    return (
        <View style={styles.container}>
            <Button
                title="toggle"
                onPress={() => {
                    randomWidth.value = Math.round(Math.random() * 350);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})