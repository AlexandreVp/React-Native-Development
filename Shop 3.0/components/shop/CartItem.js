import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import BodyText from '../BodyText'
import TitleText from '../TitleText'



const CartItem = props =>
{
    return (

        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <BodyText style={styles.quantity}>{props.quantity} </BodyText>
                <TitleText style={styles.title}>{props.title}</TitleText>
            </View>
            <View style={styles.itemData}>
                <BodyText style={styles.amount}>{props.amount.toFixed(2)}</BodyText>
                {props.deletable &&
                    <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} >
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} 
                            size={23}
                            color='red'
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create
(
    {
        cartItem:
        {
            padding: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
        },
        itemData:
        {
            flexDirection: 'row',
            alignItems: 'center',
        },
        quantity:
        {
            color: '#888',
            fontSize: 16
        },
        title:
        {
            fontSize: 16,
        },
        amount:
        {
            fontSize: 16
        },
        deleteButton:
        {
            marginLeft: 20
        },
    }
)

export default CartItem