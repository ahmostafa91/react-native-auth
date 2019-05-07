import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 60,
        backgroundColor: '#2a3744',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default Header;