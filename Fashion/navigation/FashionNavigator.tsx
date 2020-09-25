import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => (

    <AuthenticationStack.Navigator headerMode='none'>

        <AuthenticationStack.Screen
            name='OnBoarding' 
            component={OnboardingScreen}
        />

    </AuthenticationStack.Navigator>
);