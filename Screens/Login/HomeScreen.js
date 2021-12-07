 import React, { Component } from 'react';

// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text, Image,
//     useColorScheme,
//     View,
// } from 'react-native';

// import { Logo } from '../Images/Group 95.png';

// export default class SplashScreen extends Component {
//     constructor() {
//         super();
//         this.state = {
//             text: "vinoda"
//         };

//     }

//     render() {
//         return (
//            <View>
//                <Text>vinoda kadari</Text>
//            </View>
//         );
//     }
// }

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from '../Images/Svgs/Home.svg';
import Feed from '../TabScreens/Feed.js';

const Tab = createMaterialBottomTabNavigator();

 export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Feed}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

     <Tab.Screen
        name="vinoda"
        component={Feed}
        options={{
          tabBarLabel: 'vinoda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
