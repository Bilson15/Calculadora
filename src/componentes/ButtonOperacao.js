import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';



export default props => {
    return (
        <Text style={styles.button}>
            {props.label}
        </Text>

    );
}


const styles = StyleSheet.create({
    button: {
        width: '8%',
        height: '20%',
        justifyContent:'space-between',
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#fa8231',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    }
  


})
