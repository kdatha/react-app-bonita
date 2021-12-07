import React, { Component } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View,
} from 'react-native';

import { Logo } from '../Images/Group 95.png';

export default class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            text: "vinoda"
        };

    }

    render() {
        return (
           <View>
               <Text>vinoda kadari</Text>
           </View>
        );
    }
}

