import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash/lib/module/v1';

import Slide, { SLIDE_HEIGHT } from '../components/Slide';

const { width } = Dimensions.get('window');

const slides = [
    { label: 'Relaxed', color: '#bfeaf5' },
    { label: 'Playful', color: '#beecc4' },
    { label: 'Excentric', color: '#ffe4d9' },
    { label: 'Funky', color: '#ffdddd' },
]

const Onboarding = () => {

    const toggle = useValue(0);
    const onScroll = onScrollEvent({ toggle });
    const backgroundColor = interpolateColor(toggle, {
        inputRange: slides.map((_, index) => index * width),
        outputRange: slides.map((value) => value.color),
    })

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Animated.View style={{...styles.slider, backgroundColor: backgroundColor}}>
                <Animated.ScrollView 
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map((value, index) => {
                        <Slide key={index} label={value.label} right={!!(index%2)}/>
                    })}
                    <Slide label='Relaxed' />
                    <Slide label='Playful' right/>
                    <Slide label='Excentric' />
                    <Slide label='Funky' right/>
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }} />
            </View>
        </View>
    )
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: 'cyan',
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
    footerOverlay: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75
    }
});