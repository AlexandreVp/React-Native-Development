import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

//set how notifications should be handled if the app is running
Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldShowAlert: true
		};
	}
});

export default function App() {

	useEffect(() => {
		Permissions.getAsync(Permissions.NOTIFICATIONS)
			.then(statusObj => {
				if (statusObj.status !== 'granted') {
					return Permissions.askAsync(Permissions.NOTIFICATIONS);
				}
				return statusObj;
			})
			.then(statusObj => {
				if (statusObj.status !== 'granted') {
					return;
				}
			});
	}, []);

	const triggerNotificationHandler = () => {
		//with this we always schedule a local notification
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first local notification',
				body: 'This is the first local notification we are sending!',
			},
			trigger: {
				seconds: 5,
			},
		});
	};

	return (

		<View style={styles.container}>
			<Button title='Trigger Notification' onPress={triggerNotificationHandler} />
			<StatusBar style='light' />
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
