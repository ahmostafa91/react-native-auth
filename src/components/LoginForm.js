import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button'
import Input from './common/Input';
//import { Card, CardItem, Button } from './common';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onLoginPress = this.onLoginPress.bind(this)
    }

    onLoginPress() {
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`)
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label='Email'
                        placeholder='Enter your email'
                        secureTextEntry={false}
                        onChangeText={ email => this.setState({email}) }
                    />
                </CardItem>

                <CardItem>
                    <Input
                    label='Password'
                    secureTextEntry={true}
                    placeholder='Enter Your Password'
                    onChangeText={ password => this.setState({password}) }
                    />
                </CardItem>

                <CardItem>
                    <Button onPress={this.onLoginPress}>Login</Button>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({});