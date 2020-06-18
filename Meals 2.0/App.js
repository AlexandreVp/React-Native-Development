import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'

enableScreens(); // Usar isso antes de qualquer código jsx vai fazer com que as screens nativas sejam rodadas e o app
			  // Tenha uma melhor performance

const rootReducer = combineReducers(
	{
		meals: mealsReducer,
	}
);

const store = createStore(rootReducer);

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

		<Provider store={store}>
			<MealsNavigator />
		</Provider>

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
