import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import * as Notifications from 'expo-notifications';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import productsReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'
import authReducer from './store/reducers/auth'
import AppNavigator from './navigation/AppNavigator'

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldShowAlert: true
		};
	},
});

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	orders: ordersReducer,
	auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

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
			<AppNavigator />
		</Provider>
	);
}
