import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './Navigation';

const Navigator = () => {

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default Navigator;