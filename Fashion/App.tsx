import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';

import { FontMap } from './constants/Fonts';

enableScreens();

export default function App() {

	let [fontsLoaded] = useFonts(FontMap);

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		
		<AppNavigator />
	);
}
