import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
    return (
        <View>
            <Text>oi</Text>
        </View>
    )
};

NewPlaceScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Add Place',
    };
};

const styles = StyleSheet.create({

});

export default NewPlaceScreen