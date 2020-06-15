import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator'

enableScreens(); // Usar isso antes de qualquer código jsx vai fazer com que as screens nativas sejam rodadas e o app
			  // Tenha uma melhor performance

const fetchFonts = () => // Para carregar nossas fontes
{
	return Font.loadAsync(
		{
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		}
	)
}

export default function App() 
{
	const [fontLoaded, setFontLoaded] = useState(false); // Para carregar nossas fontes

	if(!fontLoaded) // Para carregar nossas fontes
	{
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}

    return (

		<MealsNavigator />

    );
}

const styles = StyleSheet.create
(
	{
		container: 
		{
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}
);
