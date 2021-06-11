import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

const LoadAssets = ({ fonts, children }) => {

    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return (
            <AppLoading />
        );
    }

    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
}

export default LoadAssets;