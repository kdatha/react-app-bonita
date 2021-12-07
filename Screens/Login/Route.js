import React, {Component} from 'react';
import { View,Button,Text, } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import AuthenticateScreen from '../Login/Login';
import ForgotPassword from '../Login/ForgotPassword';
// import HomeScreen from '../Login/HomeScreen';
import Sigin from '../Login/Signup';
// import { Tab } from 'react-native-elements';
import Feed1 from '../TabScreens/Feed1';
import CartScreen from '../TabScreens/CartScreen';

const Stack = createStackNavigator();
function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={AuthenticateScreen} />
        <Stack.Screen name="Home" component={Feed1} />
        <Stack.Screen name="Cartscreen" component={CartScreen} />
      
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Forgot" component={ForgotPassword} />
           <Stack.Screen name="Sigin" component={Sigin} />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default class RoutingScreen extends Component {
  render() {
    return (
    <NavStack />
    
    );
  }
}

