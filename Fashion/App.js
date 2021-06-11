import React from 'react';

import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Onboarding from './src/Authentication/Onboarding/Onboarding';
import LoadAssets from './src/Components/LoadAssets';

import { FontsMap } from './src/Constants/Fonts';

enableScreens(true);

const AuthenticationStack = createNativeStackNavigator();
const AuthenticationNavigator = () => {
	return (
		<AuthenticationStack.Navigator 
			screenOptions={{
				headerShown: false
			}}
		>
			<AuthenticationStack.Screen 
				name="Onboarding"
				component={Onboarding}
			/>
		</AuthenticationStack.Navigator>
	)
};

export default function App() {

	return (
		<LoadAssets fonts={FontsMap}>
			<AuthenticationNavigator />
		</LoadAssets>
	);
}