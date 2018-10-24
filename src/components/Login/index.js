import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button
                    title="Go To Main Screen"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        );
    }
}

export default Login;