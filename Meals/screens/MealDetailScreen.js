import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props =>
{
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
};

const MealDetailScreen = props =>
{
    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (

        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title} >Ingredients</Text>
            {selectedMeal.ingredients.map(ingredients => <ListItem key={ingredients} >{ingredients}</ListItem>)}
            <Text style={styles.title} >Steps</Text>
            {selectedMeal.steps.map(steps => <ListItem key={steps} >{steps}</ListItem>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) =>
{
    const mealId = navigationData.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Favorite' 
                        iconName='ios-star-outline' 
                        onPress={() => 
                            {
                                console.log('Mark as a favorite!')
                            }} 
                    />
                </HeaderButtons>
            ),
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
        details:
        {
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
        },
        title:
        {
            fontFamily: 'open-sans-bold',
            fontSize: 20,
            textAlign: 'center',
        },
        listItem:
        {
            marginVertical: 10,
            marginHorizontal: 20,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
        }
    }
)

export default MealDetailScreen;