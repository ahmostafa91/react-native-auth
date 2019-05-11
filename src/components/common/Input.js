import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput 
                style={styles.input}
                value={props.value}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60
    },
    label: {
        flex: 1,
        color: '#707070',
        paddingLeft: 10,
        fontSize: 16
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color:'#000'
    }
});

export default Input;