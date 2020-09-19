import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';


export default function App() 
{
	const triggerNotificationHandler = () => {
		//with this we always schedule a local notification
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first local notification',
				body: 'This is the first local notification we are sending!',
			},
			trigger: {
				seconds: 10,
			},
		});
	};

	return (

		<View style={styles.container}>
			<Button title='Trigger Notification' onPress={triggerNotificationHandler} />
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
