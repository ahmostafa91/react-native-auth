import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button'
import Input from './common/Input';
import firebase from '../firebase';
import Spinner from './common/Spinner';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onAuthFailed = this.onAuthFailed.bind(this);
        this.showButtonOrSpinner = this.showButtonOrSpinner.bind(this);
        this.onAuthSucsess = this.onAuthSucsess.bind(this);
    }

    onLoginPress() {
        const { email, password } = this.state;

        this.setState({loading: true, error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSucsess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSucsess)
                    .catch(this.onAuthFailed)
            })
    }

    onAuthSucsess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onAuthFailed() {
        this.setState({error: 'Authenticatiom Failed', loading: false});
    }

    showButtonOrSpinner() {
        if(this.state.loading) {
            return <Spinner color='#0000ff' size='large'/>
        }

        return(
            <Button onPress={this.onLoginPress}>Login</Button>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label='Email'
                        value={this.state.email}
                        placeholder='Enter your email'
                        secureTextEntry={false}
                        onChangeText={ email => this.setState({email}) }
                    />
                </CardItem>

                <CardItem>
                    <Input
                    label='Password'
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder='Enter Your Password'
                    onChangeText={ password => this.setState({password}) }
                    />
                </CardItem>

                <Text style={styles.errorMessage}>{this.state.error}</Text>

                <CardItem>
                    { this.showButtonOrSpinner() }
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#FF0000',
        marginTop: 5
    }
});