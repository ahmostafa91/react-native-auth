import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ({size, color}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={color} size={ size || 'large' }/>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Spinner;