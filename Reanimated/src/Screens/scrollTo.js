import React from 'react';
import { View, StyleSheet, Button, ScrollView, Text } from 'react-native';
import Animated, { useAnimatedRef, useSharedValue, scrollTo, useDerivedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../Constants/Colors';

const LIST_ITEM_HEIGHT = 80;
const LIST_ITEM_MARGIN_BOTTOM = 10;

const AnimatedRecButton = Animated.createAnimatedComponent(RectButton);

const ScrollTo = () => {

    const aref = useAnimatedRef();
    const scroll = useSharedValue(0);
    const scrollY = useSharedValue(0);

    useDerivedValue(() => {
        scrollTo(aref, 0, scroll.value, true);
    });

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const scrollToTopButtonStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [500, 510],
                [0, 1],
                Extrapolate.CLAMP
            )
        }
    });

    const items = Array.from(Array(20).keys());

    return (
        <View style={styles.container}>
            <Button
                title="scroll down"
                onPress={() => {
                    scroll.value = scrollY.value + LIST_ITEM_HEIGHT + LIST_ITEM_MARGIN_BOTTOM;
                }}
                color={Colors.primary}
            />
            <Animated.ScrollView
                ref={aref}
                style={{ backgroundColor: Colors.secondary }}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}
                onScroll={scrollHandler}
            >
            {items.map((_, i) => (
                <View key={i} style={styles.listItem}>
                    <Text style={styles.listText}>List Item</Text>
                    <Text style={styles.listText}>{i+1}</Text>
                </View>
            ))}
            </Animated.ScrollView>
            <AnimatedRecButton onPress={() => {scroll.value = 0}} style={[scrollToTopButtonStyle, styles.toTopButton]}>
                <Ionicons name='chevron-up-outline' size={22}/>
            </AnimatedRecButton>
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
        height: LIST_ITEM_HEIGHT,
        marginBottom: LIST_ITEM_MARGIN_BOTTOM
    },
    listText: {
        padding: 20,
        fontSize: 18
    },
    toTopButton: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        zIndex: 10,
        elevation: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    }
})

export default ScrollTo;