import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props =>
{
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21)
    {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}> 
            <TouchableComponent
                style={{ flex: 1, }}
                onPress={props.onSelectTile}
            >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }} >
                    <Text styles={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create
(
    {
        gridItem:
        {
            flex: 1,
            margin: 15,
            height: 150,
            borderRadius: 10,
            overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
            elevation: 5,
        },
        container:
        {
            flex: 1,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 10,
            padding: 15,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        title:
        {
            fontFamily: 'open-sans-bold',
            fontSize: 20,
            textAlign: 'right',
        }
    }
);

export default CategoryGridTile