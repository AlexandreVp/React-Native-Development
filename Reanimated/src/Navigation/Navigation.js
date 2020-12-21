import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import useAnimatedStyle, { screenOptions as useAnimatedStyleOptions } from '../Screens/useAnimatedStyle';
import useDerivedValue, { screenOptions as useDerivedValueOptions } from '../Screens/useDerivedValue';
import useSharedValue, { screenOptions as useSharedValueOptions } from '../Screens/useSharedValue';


const defaultNavOptions =
{
    headerShown: true,
	headerStyle: 
	{
		backgroundColor: 'white'
	},
    headerTintColor: '#6441a5',
};

const DrawerNavigator = createDrawerNavigator();

export const AppNavigator = () => {
    return (
        <DrawerNavigator.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#6441a5',
                activeTintColor: 'white'
            }}
        >

            <DrawerNavigator.Screen 
                name='useAnimatedStyle'
                component={useAnimatedStyle}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='useDerivedValue'
                component={useDerivedValue}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='useSharedValue'
                component={useSharedValue}
                options={defaultNavOptions}
            />
        </DrawerNavigator.Navigator>
    )
};