import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import { Fonts } from '../../Constants/Fonts';

const { width, height } = Dimensions.get('window');
const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right }) => {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100)/2 },
        { translateX: right ? width/2 - 50 : -width/2 + 50 },
        { rotate: right ? '90deg' : '-90deg' }
    ];
    

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={[styles.title]}>{label}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
    },
    title: {
        position: 'absolute',
        fontSize: 80,
        lineHeight: 80,
        fontFamily: Fonts.SFProDisplayBold,
        color: 'white',
    },
    titleContainer: {
        backgroundColor: 'red',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Slide;