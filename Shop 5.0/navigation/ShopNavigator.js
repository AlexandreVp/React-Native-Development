import React from 'react'
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'

import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

import ProductsOverviewScreen, { screenOptions as productsOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, { screenOptions as productDatailScreenOptions } from '../screens/shop/ProductDetailScreen'
import CartScreen, { screenOptions as cartScreenOptions } from '../screens/shop/CartScreen'
import OrdersScreen, { screenOptions as ordersScreenOptions } from '../screens/shop/OrdersScreen'
import UserProductsScreen, { screenOptions as userProductsScreenOptions } from '../screens/user/UserProductsScreen'
import EditProductScreen, { screenOptions as editProductsScreenOptions } from '../screens/user/EditProductScreen'
import AuthScreen, { screenOptions as authScreenOptions } from '../screens/user/AuthScreen'
import StartupScreen from '../screens/StartupScreen'
import Colors from '../constants/Colors';

const defaultNavOptions =
{
	headerStyle: 
	{
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
	},
	headerTitleStyle:
	{
		fontFamily: 'open-sans-bold'
	},
	headerBackTitleStyle:
	{
		fontFamily: 'open-sans'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsStackNavigator = createStackNavigator();
const ProductsNavigator = () => {
	return (
		<ProductsStackNavigator.Navigator 
			screenOptions={defaultNavOptions}
		>

			<ProductsStackNavigator.Screen 
				name='ProductsOverview'
				component={ProductsOverviewScreen}
				options={productsOverviewScreenOptions}
			/>
			<ProductsStackNavigator.Screen 
				name='ProductDetail'
				component={ProductDetailScreen}
				options={productDatailScreenOptions}
			/>
			<ProductsStackNavigator.Screen 
				name='Cart'
				component={CartScreen}
				options={cartScreenOptions}
			/>

		</ProductsStackNavigator.Navigator>
	);
};

const OrdersStackNavigator = createStackNavigator();
const OrdersNavigator = () => {
	return (
		<OrdersStackNavigator.Navigator
			screenOptions={defaultNavOptions}
		>

			<OrdersStackNavigator.Screen 
				name='Orders'
				component={OrdersScreen}
				options={ordersScreenOptions}
			/>

		</OrdersStackNavigator.Navigator>
	)
};

const AdminStackNavigator = createStackNavigator();
const AdminNavigator = () => {
	return (
		<AdminStackNavigator.Navigator 
			screenOptions={defaultNavOptions}
		>

			<AdminStackNavigator.Screen 
				name='UserProducts'
				component={UserProductsScreen}
				options={userProductsScreenOptions}
			/>
			<AdminStackNavigator.Screen 
				name='EditProduct'
				component={EditProductScreen}
				options={editProductsScreenOptions}
			/>

		</AdminStackNavigator.Navigator>
	);
};

const ShopDrawerNavigator = createDrawerNavigator();
export const ShopNavigator = () => {

	const dispatch = useDispatch();

	return (
		<ShopDrawerNavigator.Navigator
			drawerContent={props => {
				return (
					<View style={{flex: 1, padding: 20}}>
						<SafeAreaView forceInset={{top: 'always', horizontal: 'never'}} >
							<DrawerItemList 
								{...props}
							/>
							<Button title='Logout' color={Colors.primary} onPress={() => {
								dispatch(
									authActions.logout()
								);
							}}/>
						</SafeAreaView>
					</View>
				)
			}}
			drawerContentOptions={{
				activeTintColor: Colors.primary,
			}}
		>

			<ShopDrawerNavigator.Screen 
				name='Products'
				component={ProductsNavigator}
				options={{
					drawerIcon: props => (
						<Ionicons 
							name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
							size={23}
							color={props.color}
						/>
					)
				}}
			/>
			<ShopDrawerNavigator.Screen 
				name='Orders'
				component={OrdersNavigator}
				options={{
					drawerIcon: props => (
						<Ionicons 
							name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
							size={23}
							color={props.color}
						/>
					)
				}}
			/>
			<ShopDrawerNavigator.Screen 
				name='Admin'
				component={AdminNavigator}
				options={{
					drawerIcon: props => (
						<Ionicons 
							name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
							size={23}
							color={props.color}
						/>
					)
				}}
			/>

		</ShopDrawerNavigator.Navigator>
	)
};

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
	return (
		<AuthStackNavigator.Navigator
			screenOptions={defaultNavOptions}
		>

			<OrdersStackNavigator.Screen 
				name='Auth'
				component={AuthScreen}
				options={authScreenOptions}
			/>

		</AuthStackNavigator.Navigator>
	)
};
