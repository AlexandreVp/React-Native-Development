import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../Constants/Colors';


const Box = (props) => {

    return (
        <View style={{...styles.box, width: props.width}} />
    );
}

const styles = StyleSheet.create({
    box: {
        height: 30,
        marginBottom: 100,
        backgroundColor: Colors.primary
    },
})

export default Box;