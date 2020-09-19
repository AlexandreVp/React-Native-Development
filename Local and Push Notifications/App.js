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
					throw new Error('Permission not granted!');
				}
			})
			.then(() => {
				//method that will talk to Expo's servers and we'll sign up our app with Expo server
				return Notifications.getExpoPushTokenAsync();
			})
			.then(response => {
				const token = response.data;
			})
			.catch(err => {
				return null;
			});
		
		//to get push notifications we'll need to sign our app up in the notifications servers and get the ID which
		//allows us to use the ID to push notifications (we do this in the third 'then' block). We need to tell
		//Expo to basically sign our app up so to say. Behind the scenes Expo do all the job for us. We only reach
		//this then block if we do have an active permission. So if the permission was not 'granted' we don't
		//really wanna return, because then the next then block would still be triggered, even though we don't
		//have permission. Instead we can throw a new Error.
		
	}, []);

	useEffect(() => {
		//allows to define a function that should run when a user interacted with a notification whilst the app
		//was not running
		const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});

		//method that allows us to define a function that should be executed when a notification is received
		//and the app is running
		const foregroundSubscription = Notifications.addNotificationReceivedListener(notification => {
			console.log(notification);
		});

		//return a cleanup fuction
		return () => {
			backgroundSubscription.remove();
			foregroundSubscription.remove();
		};
	}, [])

	const localTriggerNotificationHandler = () => {
		//with this we always schedule a local notification
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first local notification',
				body: 'This is the first local notification we are sending!',
				data: {
					mySpecialData: 'Some text'
				},
			},
			trigger: {
				seconds: 5,
			},
		});
	};

	return (

		<View style={styles.container}>
			<Button title='Trigger Notification' />
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
