import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import Gestures from "../Screens/Gestures";
import longPressGestureHandler from '../Screens/LongPressGestureHandler';
import Drag, { screenOptions as dragScreenOptions } from '../Screens/Drag';
import panGestureHandler from '../Screens/PanGestureHandler';
import Scroll from "../Screens/Scroll";
import tapGestureHandler from '../Screens/TapGestureHandler';


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
                name='Gestures'
                component={Gestures}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='LongPressGestureHandler'
                component={longPressGestureHandler}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='Drag'
                component={DragNavigator}
            />

            <DrawerNavigator.Screen 
                name='PanGestureHandler'
                component={panGestureHandler}
                options={defaultNavOptions}
            />

            <DrawerNavigator.Screen 
                name='Scroll'
                component={Scroll}
            />

            <DrawerNavigator.Screen 
                name='TapGestureHandler'
                component={tapGestureHandler}
                options={defaultNavOptions}
            />

        </DrawerNavigator.Navigator>
    )
};