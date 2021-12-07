import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Image,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons';
//import {Toast, Container, Content, Form} from 'native-base';

//const {height} = useWindowDimensions();
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      //  icon: 'eye-off',
    };
  }

  navigateToForgotPasswordScreen = () => {
    this.props.navigation.navigate('Forgot');
  };

  Login = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
        <ScrollView>
      <View>
        <View>
          <StatusBar backgroundColor="black" barStyle={'light-content'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '100%'
            padding: 20,
          }}>
          <Image
            resizeMode="contain"
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: 300,
            }}
            source={require('../Images/Logo.png')}
          />
        </View>
        <View style={{margin: 15}}>
          {/* LoginScreen */}

          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              paddingHorizontal: 10,
              marginVertical: 5,
            }}>
            <TextInput
              autoCapitalize={'none'}
              keyboardType="email-address"
              autoCompleteType={'email'}
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
              placeholder="User Name"
            />
          </View>

          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              paddingHorizontal: 10,
              marginVertical: 5,
            }}>
            <TextInput
              autoCapitalize={'none'}
              keyboardType="email-address"
              autoCompleteType={'email'}
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
              placeholder="Mobile Number"
            />
          </View>

          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              paddingHorizontal: 10,
              marginVertical: 5,
            }}>
            <TextInput
              autoCapitalize={'none'}
              keyboardType="email-address"
              autoCompleteType={'email'}
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
              placeholder="Email"
            />
          </View>

          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              paddingHorizontal: 10,
              marginVertical: 5,
            }}>
            <TextInput
              autoCapitalize={'none'}
              keyboardType="email-address"
              autoCompleteType={'email'}
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
              placeholder="Confirm Password"
            />
          </View>
          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              paddingHorizontal: 10,
              marginVertical: 5,
            }}>
            <TextInput
              value={this.state.password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={pass => this.setState({password: pass})}
              ref={input => (this.passwordInput = input)}
            />
            {/* <Icon
              style={{
                alignSelf: 'flex-end',
                marginTop: -35,
                marginRight: 10,
                
              }}
              size={20}
              name="eye"
             type="FontAwesome"
            /> */}
          </View>
        </View>

        {/* Button */}

        {/* signup */}
        <View style={{marginTop: 20}}>
          <Button
            // onPress={onPressLearnMore}
            title="SignUp"
            color="#841584"
          />
        </View>
      </View>
      </ScrollView>
    );
  }
}
