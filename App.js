import { Text, StyleSheet, View, Settings, DevSettings } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Login from './src/Login'
import Onboard from './src/Onboard';
import SignUp from './src/SignUp'
import Dashboard from './src/Dashboard';
import User from './src/User';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {

      
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen  name="SignUp" component={SignUp}/>
        <Stack.Screen  name="User" component={User}/>
        </Stack.Navigator>
      </NavigationContainer> 
    )
  }     
}

