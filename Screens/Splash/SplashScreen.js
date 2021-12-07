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


export default class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            text: "vinoda"
        };

    }

    render() {
        return (
            <View style={{
                backgroundColor:'#8b008b',
                flex:1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Image
                    style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
                    source={require('../Images/Icon.png')}
                />
                {/* <Text>Splash screen</Text> */}
            </View>
        );
    }
}

