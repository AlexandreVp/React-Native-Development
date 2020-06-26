import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import BodyText from '../BodyText'
import TitleText from '../TitleText'
import CartItem from './CartItem'
import Colors from '../../constants/Colors'

import Card from '../UI/Card'

const OrderItem = props =>
{
    const [showDetails, setShowDetails] = useState(false)

    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <TitleText>${props.amount.toFixed(2)}</TitleText> 
                <BodyText style={styles.date}>{props.date}</BodyText>
            </View>
            <Button 
                color={Colors.primary} 
                title={showDetails ? 'Hide details' : 'Show details'} 
                onPress={() => setShowDetails(!showDetails)} 
            />
            {showDetails && 
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                        />
                    ))}
                </View>    
            }
        </Card>
    )
}

const styles = StyleSheet.create
(
    {
        orderItem:
        {
            margin: 20,
            padding: 10,
            alignItems: 'center'
        },
        summary:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: 15
        },
        date:
        {
            fontSize: 16,
            color: '#888'
        },
        detailItems:
        {
            width: '100%',
        }
    }
)

export default OrderItem