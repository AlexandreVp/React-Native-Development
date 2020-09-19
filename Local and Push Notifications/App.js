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

	const [pushToken, setPushToken] = useState();

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
				setPushToken(response.data);
				fetch('https://your-own-api.com')
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

	const triggerNotificationHandler = () => {
		//Wherever you wanna send a push notification, you need to send a http request to Expo's servers.
		//We can do this with the fetch API, using the URL to Expo's push notification server, which we'll leverage
		//to deliver our push notification to a different device
		fetch('https://exp.host/--/api/v2/push/send', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Accept-Encoding': 'gzip, deflate',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				to: pushToken,
				data: {
					extraData: 'Some data'
				},
				title: 'Sent via the app',
				body: 'This push notification was sent via the app!'
			})
		});
	};

	//How to get the pushToken of other devices to notificate them? Just as we get their emails or whatever else
	//we need in an application. You can of course write code where once you got that token, you don't, or maybe
	//not just manage it in your local state, but instead you send an HTTP request to your own API where you then
	//have some logic to receive that token and store it in a database. This token of course can, and in reality
	//will, be shared and stored in a database. So that any user of your app submits not just his or her email
	//address and password, but also his or her push token. And with that data stored in a database on your server,
	//you can, of course, always retrieve that token and use it in your app when you need it. So you can share that
	//token, just like you share other user data as needed. After all, if a user creates a product in a shop app,
	//we also store that product in a database to show it to other users as well. With a token, it's no different,
	//we won't show it to other users, but we can still fetch it on the devices of our users and there use it in
	//the code to send push notifications as shown here. 

	//Expo also offers an way to send push notifications from your own server. So, you don't need to do this inside
	//the app. They offers a lot of SDK's for Node, Python, PHP, which makes very easy to trigger push
	//notifications on your own server. Under the hood those SDK's will basicaly do what we do here.

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
