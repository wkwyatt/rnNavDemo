import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Main Screen</Text>
                <Button
                    title="Go To Login Screen"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default Main;