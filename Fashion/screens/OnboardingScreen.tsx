import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Slide from '../components/Slide';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.slider}>
                <ScrollView 
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label='Relaxed' />
                    <Slide label='Playful' right/>
                    <Slide label='Excentric' />
                    <Slide label='Funky' right/>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'cyan' }} />
                <View style={styles.footerOverlay}>

                </View>
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
        height: 0.61 * height,
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