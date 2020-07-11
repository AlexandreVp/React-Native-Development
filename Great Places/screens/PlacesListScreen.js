import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors';

const PlacesListScreen = props => {
    return (
        <View>
            <Text>oi</Text>
        </View>
    )
};

PlacesListScreen.navigationOptions = navData => {

    return {
        headerTitle: 'All places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                    title='Add Place' 
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add' }
                    onPress={() => navData.navigation.navigate('NewPlace')}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({

});

export default PlacesListScreen;