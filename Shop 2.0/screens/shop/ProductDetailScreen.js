import React from 'react'
import { 
    ScrollView, 
    View, 
    Text, 
    Image, 
    Button, 
    StyleSheet 
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import BodyText from '../../components/BodyText'
import Colors from '../../constants/Colors'
import * as cartActions from '../../store/actions/cart'

const ProductDetailScreen = props =>
{
    const productId = props.navigation.getParam('productId')

    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

    const dispatch = useDispatch()

    return (

        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
            <View style={styles.actions}>
                <Button 
                    color={Colors.primary} 
                    title='Add to cart' 
                    onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct))
                }}/>
            </View>
            <BodyText style={styles.price}>${selectedProduct.price.toFixed(2)}</BodyText>
            <BodyText style={styles.description}>{selectedProduct.description}</BodyText>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = navData =>
{
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }    
}

const styles = StyleSheet.create
(
    {
        image:
        {
            width: '100%',
            height: 300,
        },
        actions:
        {
            marginVertical: 10,
            alignItems: 'center',
        },
        price:
        {
            fontSize: 20,
            color: '#888',
            textAlign: 'center',
            marginVertical: 20,
        },
        description:
        {
            fontSize: 14,
            textAlign: 'center',
            marginHorizontal: 20,
        }
    }
)

export default ProductDetailScreen