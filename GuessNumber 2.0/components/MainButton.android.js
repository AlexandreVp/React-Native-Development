import React from 'react'
import 
{ 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform 
} from 'react-native'

import Colors from '../constants/colors'

const MainButton = props =>
{
    let ButtonComponent = TouchableOpacity;

    // Só a versão 21 pra frente do android suporta o ripple effect
    // Com os arquivos do MainButton.android / ios , não precisaria mais de checar esse Platform dentro do if
    if(Platform.OS === 'android' && Platform.Version >= 21)
    {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        //Colocando essa View pra arrumar o toque no botão do Android, pro efeito respeitar o borderRadius do botão
        //Aí coloca nessa View a mesma borderRadius que você colocou no botão como estilo
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create
(
    {
        buttonContainer:
        {
            borderRadius: 25,
            overflow: 'hidden'
            // O hidden fará com que qualquer componente filho que ultrapasse os limites desse componente (nesse caso
            // desse container), é basicamente "cortado" . Isso assegura que o efeito cascata do Android (que agora é
            // um componente filho desse container) será cortado e ficará entre as bordas do botão.
        },
        button:
        {
            backgroundColor: Colors.primary,
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
        },
        buttonText:
        {
            color: 'white',
            fontFamily: 'open-sans',
            fontSize: 18
        },
    }
)

export default MainButton