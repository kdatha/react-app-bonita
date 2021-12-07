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
  Text,
  Image,
  useColorScheme,
  View,
  Header,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

export default class CartScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'vinoda',
    };
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../Images/Cart.png')} />
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Cart(2)</Text>
        </View>

        <View style={{marginTop:5}}>
          <Card>
            <View style={{flexDirection: 'row',padding:10}}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />

              <Text style={{padding:10}}>vsahxhgasxga {'\n'} sdsgdshdhfsfs</Text>
              <Icon
                name="circle-with-cross"
                style={{height:10,width:10}}
              />
            </View>
            
          </Card>
        </View>
        <View style={{marginTop:5}}>
          <Card>
            <View style={{flexDirection: 'row',padding:10}}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />

              <Text style={{padding:10}}>vsahxhgasxga {'\n'} sdsgdshdhfsfs</Text>
              <Icon
                name="circle-with-cross"
                style={{height:10,width:10}}
              />
            </View>
            
          </Card>
        </View>

        <View style={{marginTop:5}}>
          <Card>
            <View style={{flexDirection: 'row',padding:10}}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />

              <Text style={{padding:10}}>vsahxhgasxga {'\n'} sdsgdshdhfsfs</Text>
              <Icon
                name="circle-with-cross"
                style={{height:10,width:10}}
              />
            </View>
            <Text style={{textAlign:'center'}}>_________________________</Text>
            <Text style={{fontWeight:'bold',fontSize:18}}>Cart Total</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text>SubTotal</Text>
            <Text> $234</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text>saftey & hygene</Text>
            <Text> $56667</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text>Total</Text>
            <Text> $75667</Text>
            </View>

            <Text style={{textAlign:'center'}}>_________________________</Text>
            <Text style={{textAlign:'center'}}>after 6 km company charges</Text>


            <View style={{padding: 20,}}>
                    <TouchableOpacity
                      activeOpacity={5}
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          marginHorizontal:20,
                          padding: 15,
                          textAlign: 'center',
                          backgroundColor: 'black',
                          color: 'white',
                          borderRadius: 15,
                         // marginBottom: 15,
                        }}>
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
          </Card>
        </View>
      </View>
    );
  }
}
