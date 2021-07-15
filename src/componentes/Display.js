import React from 'react';
import ButtonOperacao from './ButtonOperacao';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';



export default props => (
    <View style={styles.display}>
        <Text
            style={styles.displayValue}
            numberOfLines={1}
        >
            {props.value}
        </Text>
    </View>
)



const styles = StyleSheet.create({
    display:{
        width: '92%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#fff',
    }

})