import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Slide from './Slide';

const { width, height } = Dimensions.get('window');
const SLIDE_HEIGHT = 0.61 * height;

const Onboarding = () => {

    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label='Relaxed' />
                    <Slide label='Playful' right />
                    <Slide label='Excentric' />
                    <Slide label='Funky' right />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerBackground}/>
                <View style={styles.footerOverlay}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: 'cyan',
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1
    },
    footerBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'cyan'
    },
    footerOverlay: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75
    }
})

export default Onboarding;