import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Fonts } from '../constants/Fonts';

interface SlideProps {
    label: string;
    right?: boolean;
}

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right }: SlideProps) => {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100)/2 },
        { translateX: right ? (width / 2) - 50 : (-width / 2) + 50 },
        { rotate: right ? '-270deg' : '270deg' }
    ];

    return (
        <View style={styles.container}>
            <View style={{...styles.titleContainer, transform: transform }}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        lineHeight: 100,
        fontFamily: Fonts.sfProTextBold,
        color: 'white',
        textAlign: 'center'
    }
});

export default Slide;
