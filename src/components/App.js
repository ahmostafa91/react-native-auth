import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from '../firebase';
import Header from './common/Header';
import LoginForm from './LoginForm';
import Button from './common/Button';
import Spinner from './common/Spinner';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedin: true});
            }
            else {
                this.setState({loggedin: false});
            }
        })
    }

    showContent() {
        switch(this.state.loggedin) {
            case true:
                return (
                    <View style={styles.btn}>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </View>
                    );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner/>;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title='auth'/>
                {this.showContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        height: 80,
        margin: 10
    }
});