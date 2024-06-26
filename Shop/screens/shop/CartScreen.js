import React from 'react'
import { View, FlatList, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import BodyText from '../../components/BodyText'
import Colors from '../../constants/Colors'
import CartItem from '../../components/shop/CartItem'
import Card from '../../components/UI/Card'
import * as cartActions from '../../store/actions/cart'
import * as orderActions from '../../store/actions/orders'

const CartScreen = props =>
{
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)

    const cartItems = useSelector(state => {
        const transformedCartItems = []
        for(const key in state.cart.items)
        {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1)
    })

    const dispatch = useDispatch()

    return (

        <View style={styles.screen}>
            <Card style={styles.summary}>
                <BodyText style={styles.summaryText}>
                    Total: <BodyText style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</BodyText>
                </BodyText>
                <Button 
                    color={Colors.accent} 
                    title='Order Now' 
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        dispatch(orderActions.addOrder(cartItems, cartTotalAmount))
                    }}
                />
            </Card>
            <FlatList 
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem 
                        quantity={itemData.item.quantity} 
                        title={itemData.item.productTitle} 
                        amount={itemData.item.sum}
                        deletable
                        onRemove={() => {
                            dispatch(cartActions.removerFromCart(itemData.item.productId))
                        }} 
                    />
                )}
            />
        </View>

    )
}

CartScreen.navigationOptions = {
    headerTitle: 'Your Cart'
}

const styles = StyleSheet.create
(
    {
        screen:
        {
            margin: 20,
        },
        summary:
        {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            padding: 10,
        },
        summaryText:
        {
            fontSize: 18,
        },
        amount:
        {
            color: Colors.primary
        }
    }
)

export default CartScreen