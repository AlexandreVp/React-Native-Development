import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler";
import { useHeaderHeight } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../Components/HeaderButton";
import Colors from "../Constants/Colors";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Drag = () => {
    const HEADER_HEIGHT = useHeaderHeight();

    console.log(HEADER_HEIGHT);

    const posX = useSharedValue(0);
    const posY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.posX = posX.value;
            context.posY = posY.value;
        },
        onActive: (event, context) => {
            let activePosX = context.posX + event.translationX;
            let activePosY = context.posY + event.translationY;
            if (activePosX + 150 < WIDTH && activePosX > 0) {
                posX.value = context.posX + event.translationX;
            }
            if ((activePosY + 150 < HEIGHT - HEADER_HEIGHT) && activePosY > 0) {
                posY.value = context.posY + event.translationY;
            }
        },
        onEnd: () => {
            posX.value = withSpring(0);
            posY.value = withSpring(0);
        }
    });

    const boxPositionStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: posX.value },
                { translateY: posY.value }
            ]
        };
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.box, boxPositionStyle]}>
                    <Text style={styles.textBox}>:)</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

export const screenOptions = (navData) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item 
					title='Menu' 
                    iconName='md-menu-sharp'
                    color={Colors.primary}
					onPress={() => {
						navData.navigation.toggleDrawer()
                    }}
                    iconSize={24}
				/>
			</HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: "#2d2d86",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22
    }
})

export default Drag;