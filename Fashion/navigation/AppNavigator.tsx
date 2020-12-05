import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthenticationNavigator } from './FashionNavigator';


const AppNavigator = () => {

    return (
        <NavigationContainer>

          	<AuthenticationNavigator />

        </NavigationContainer>
    );
};

export default AppNavigator