import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import Reanimated from "../Screens/Reanimated";
import Drag, { screenOptions as dragScreenOptions } from '../Screens/Drag';
import Scroll from "../Screens/Scroll";
import useAnimatedScrollHandler from '../Screens/useAnimatedScrollHandler';
import useAnimatedStyle, { screenOptions as useAnimatedStyleOptions } from '../Screens/useAnimatedStyle';
import useDerivedValue, { screenOptions as useDerivedValueOptions } from '../Screens/useDerivedValue';
import useSharedValue, { screenOptions as useSharedValueOptions } from '../Screens/useSharedValue';
import withSequence from "../Screens/withSequence";
import withTiming from "../Screens/withTiming";


const defaultNavOptions =
{
    headerShown: true,
	headerStyle: 
	{
		backgroundColor: 'white'
	},
    headerTintColor: '#6441a5',
};

const DragStackNavigator = createStackNavigator();
const DragNavigator = () => {
    return (
        <DragStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <DragStackNavigator.Screen 
                name='Drag'
                component={Drag}
                options={dragScreenOptions}
            />
        </DragStackNavigator.Navigator>
    )
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
                name='Reanimated'
                component={Reanimated}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='Drag'
                component={DragNavigator}
            />

            <DrawerNavigator.Screen 
                name='Scroll'
                component={Scroll}
            />

            <DrawerNavigator.Screen 
                name='useAnimatedScrollHandler'
                component={useAnimatedScrollHandler}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='useAnimatedStyle'
                component={useAnimatedStyle}
                options={defaultNavOptions}
            />

            {/* <DrawerNavigator.Screen 
                name='useDerivedValue'
                component={useDerivedValue}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='useSharedValue'
                component={useSharedValue}
                options={defaultNavOptions}
            /> */}

            <DrawerNavigator.Screen 
                name='withSequence'
                component={withSequence}
                options={defaultNavOptions}
            />
            
            <DrawerNavigator.Screen 
                name='withTiming'
                component={withTiming}
                options={defaultNavOptions}
            />

        </DrawerNavigator.Navigator>
    )
};