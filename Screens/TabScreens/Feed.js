 import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import Feed1 from '../TabScreens/Feed1.js';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Feed1} />
//         <Drawer.Screen name="Notifications" component={Feed1} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

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
    
    export default class SplashScreen extends React.Component {
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