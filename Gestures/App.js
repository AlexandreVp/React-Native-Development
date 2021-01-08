import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './src/Navigation/Navigator';

export default function App() {
	return (
		<>
			<StatusBar hidden />
			<Navigator />
		</>
	);
}
