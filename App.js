/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {createStackNavigator} from "react-navigation";
import {TBBatteryManager, Root} from 'react-native-toolbox';

import Main from './src/components/Main';
import Login from './src/components/Login';

import TBConfig from '@TBConfig';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

let AppNav = createStackNavigator({
    Main: Main,
    Login: Login
}, {
    initialRouteName: 'Login'
});

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { isAvailable: false, ready: false };
        console.log("toolbox -> ", TBConfig);
    }

    async componentDidMount() {
        try {
            const isAvailable = await RNToolbox.isAvailable();
            this.setState({ isAvailable: isAvailable, ready: true });
        } catch (ex) {
            console.log('Error = ', ex);
        }
    }

  render() {
        // console.log("toolbox -> ", BatterManager);
      const { routes, initialRouteName } = TBConfig.Navigation;
      return <Root config={TBConfig} routes={routes} initialRouteName={initialRouteName} />;

    return (
        <MenuProvider>
          <AppNav/>
        </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
