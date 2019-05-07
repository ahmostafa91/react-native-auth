import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './common/Header';
import LoginForm from './LoginForm';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title='auth'/>
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});