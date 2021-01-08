import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import Gestures from "../Screens/Gestures";
import Drag, { screenOptions as dragScreenOptions } from '../Screens/Drag';
import Scroll from "../Screens/Scroll";


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
                name='Drag'
                component={DragNavigator}
            />

            <DrawerNavigator.Screen 
                name='Scroll'
                component={Scroll}
            />

        </DrawerNavigator.Navigator>
    )
};