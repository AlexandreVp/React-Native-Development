import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import productsReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	orders: ordersReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => // Para carregar nossas fontes
{
	return Font.loadAsync(
		{
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		}
	)
}

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false); // Para carregar nossas fontes

	if(!fontLoaded) // Para carregar nossas fontes
	{
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}

	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}
