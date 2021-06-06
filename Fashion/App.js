import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from './src/Authentication/Onboarding/Onboarding';
import LoadAssets from './src/Components/LoadAssets';

import { FontsMap } from './src/Constants/Fonts';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {

	return (
		<AuthenticationStack.Navigator headerMode="none">
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