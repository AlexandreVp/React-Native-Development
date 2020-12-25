import React from 'react';
import { View, StyleSheet, Button, ScrollView, Text } from 'react-native';
import { useAnimatedRef, useSharedValue, scrollTo, useDerivedValue } from 'react-native-reanimated';

import Colors from '../Constants/Colors';

const ScrollTo = () => {

    const aref = useAnimatedRef();
    const scroll = useSharedValue(0);

    useDerivedValue(() => {
        scrollTo(aref, 0, scroll.value * 100, true);
    });

    const items = Array.from(Array(20).keys());

    return (
        <View style={styles.container}>
            <Button
                title="scroll down"
                onPress={() => {
                    scroll.value = scroll.value + 1;
                    if (scroll.value >= 10) {
                        scroll.value = 0;
                    }
                }}
                color={Colors.primary}
            />
            <ScrollView
                ref={aref}
                style={{ backgroundColor: Colors.secondary }}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}
            >
            {items.map((_, i) => (
                <View key={i} style={styles.listItem}>
                    <Text style={styles.listText}>List Item</Text>
                    <Text style={styles.listText}>{i+1}</Text>
                </View>
            ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollBackground: {
        backgroundColor: 'green'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: 80,
        marginBottom: 10
    },
    listText: {
        padding: 20,
        fontSize: 18
    }
})

export default ScrollTo;