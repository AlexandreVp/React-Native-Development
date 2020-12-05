import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface SlideProps {
    label: string;
    right?: boolean;
}

const { width } = Dimensions.get('window');

const Slide = ({ label, right }: SlideProps) => {

    return (
        <View style={{ width }}>
            <Text>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Slide;
