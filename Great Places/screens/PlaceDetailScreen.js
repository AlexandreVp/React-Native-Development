import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = props => {
    return (
        <View>
            <Text>oi</Text>
        </View>
    )
};

PlaceDetailScreen.navigationOptions = navData => {

    return {
        headerTitle: navData.navigation.getParam('placeTitle'),
    };
};

const styles = StyleSheet.create({

});

export default PlaceDetailScreen