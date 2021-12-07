import React, {Component, createRef} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Dimensions,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const actionSheetRef = createRef();
const actionSheetRef1 = createRef();

let actionSheet;
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      time: 30,
      loginAction: false,
      getOtp: true,
      profile:false,
    };
    this.pin1Ref = React.createRef();
    this.pin2Ref = React.createRef();
    this.pin3Ref = React.createRef();
    this.pin4Ref = React.createRef();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  };

  tick = () => {
    let time = this.state.time;
    if (time > 0) {
      time -= 1;
      this.setState({time});
    }
  };

  componentDidMount() {
    this.startTimer();
  }
  renderLogin = () => {
    console.log('datha sao');
    this.setState({
      loginAction: true,
      getOtp: false,
      profile:false,
    });
  };

  renderProfile = () => {
    this.setState({
      loginAction: false,
      getOtp: false,
      profile:true,
    });
  };

  render() {
    return (
      //   <View>
      //   <StatusBar backgroundColor="black" barStyle={'light-content'} />
      // </View>
      <ImageBackground
        source={require('../Images/Welcome_screen_image.png')}
        style={{
          height: windowHeight,
          width: '100%',
          backgroundColor: `#000000`,
        }}>
        <View style={{height: windowHeight, flex: 1}}>
          <View>
            <Image
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 60,
              }}
              source={require('../Images/Icon.png')}
            />
          </View>
          <View style={{marginTop: '35%'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
              Helping
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
                margin: 25,
              }}>
              You to take good care of your skin
            </Text>
          </View>

          <View>
            <ActionSheet ref={actionSheetRef}>
              {/* ------- Login with phone number module --------*/}
              {this.state.getOtp && (
                <View>
                  <Text
                    style={{
                      padding: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'black',
                    }}>
                    Register/Login
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginVertical: 10,
                      color: 'black',
                    }}>
                    Enter Mobile Number
                  </Text>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                      style={{
                        borderWidth: 0.3,
                        width: '80%',
                        textAlign: 'center',
                        borderRadius: 10,
                        borderColor: `#add8e6`,
                      }}
                      placeholder={'Enter your mobile no'}
                      maxLength={13}
                    />
                    <View style={{padding: 20,}}>
                      <TouchableOpacity
                        activeOpacity={5}
                        onPress={() => this.renderLogin()}>
                        <Text
                          allowFontScaling={false}
                          style={{
                            marginHorizontal:10,
                            padding: 15,
                            textAlign: 'center',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 15,
                           // marginBottom: 15,
                          }}>
                          Get OTP
                        </Text>
                      </TouchableOpacity>
                      <Text style={{textAlign:'center',padding:10}}>Terms of Sevices.</Text>
                    </View>
                  </View>
                </View>
              )}

              {/* ------- Login with OTP Verify --------*/}
              {this.state.loginAction && (
                <View>
                  <Text
                    style={{
                      padding: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'black',
                    }}>
                    Register/Login
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginVertical: 10,
                      color: 'black',
                    }}>
                    Enter OTP
                  </Text>
                  <Text style={{margin: 15, textAlign: 'center'}}>
                    We have Sent you a 4digit Verification code in the given
                    Mobile Number
                  </Text>
                  <Text style={{fontSize: 16, textAlign: 'center', margin: 5}}>
                    *******890
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      paddingBottom: 10,
                      justifyContent: 'space-evenly',
                      marginTop: 10,
                    }}>
                    <TextInput
                      ref={ref => {
                        this.pin1Ref = ref;
                      }}
                      autoFocus={true}
                      maxLength={1}
                      keyboardType={'phone-pad'}
                      value={this.state.pin1}
                      onChangeText={pin1 => {
                        pin1 ? this.pin1Ref.focus() : this.pin2Ref.focus()
                        this.setState({pin1: pin1});
                        if (this.state.pin1 != '') {
                        }
                        this.pin2Ref.focus();
                      }}
                      style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        fontSize: 20,
                        width: '10%',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    />
                    <TextInput
                      ref={ref => {
                        this.pin2Ref = ref;
                      }}
                      maxLength={1}
                      keyboardType={'phone-pad'}
                      value={this.state.pin2}
                      onChangeText={pin2 => {
                        pin2 ? this.pin1Ref.focus() : this.pin2Ref.focus()
                        this.setState({pin2: pin2});
                        if (this.state.pin2 != '') {
                        }
                        this.pin3Ref.focus();
                      }}
                      style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        fontSize: 20,
                        width: '10%',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    />
                    <TextInput
                      ref={ref => {
                        this.pin3Ref = ref;
                      }}
                      maxLength={1}
                      keyboardType={'phone-pad'}
                      value={this.state.pin3}
                      onChangeText={pin3 => {
                        pin3 ? this.pin4Ref.focus() : this.pin2Ref.focus()
                        this.setState({pin3: pin3});
                        if (this.state.pin3 != '') {
                        }
                        this.pin4Ref.focus();
                      }}
                      style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        fontSize: 20,
                        width: '10%',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    />
                    <TextInput
                      ref={ref => {
                        this.pin4Ref = ref;
                      }}
                      maxLength={1}
                      keyboardType={'phone-pad'}
                      value={this.state.pin4}
                      onChangeText={pin4 => {
                        this.setState({pin4: pin4});
                        if (this.state.pin4 != '') {
                        }
                      }}
                      style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        fontSize: 20,
                        width: '10%',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    />
                  </View>

                  {this.state.time !== 0 && (
                    <Text
                      style={{
                        fontSize: 14,
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      Resend OTP {this.state.time}
                    </Text>
                  )}

                  {this.state.time <= 0 && (
                    <View
                      style={{
                        marginTop: 40,
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        To send opt again
                      </Text>
                      <TouchableOpacity
                        onPress={() => console.log('resend otp')}>
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            color: 'black',
                            marginLeft: 5,
                          }}>
                          Click Here
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}

                  <View style={{padding: 20,}}>
                    <TouchableOpacity
                      activeOpacity={5}
                      onPress={() => this.renderProfile()}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          marginHorizontal: 50,
                          padding: 15,
                          textAlign: 'center',
                          backgroundColor: 'black',
                          color: 'white',
                          borderRadius: 15,
                         // marginBottom: 15,
                        }}>
                        Verify OTP
                      </Text>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',padding:10}}>Terms of Sevices.</Text>
                  </View>
                </View>
              )}


            {this.state.profile && 
            <View>
              <Text
                    style={{
                      padding: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'black',
                      textAlign:'center',
                    }}>
                   My Profile
                  </Text>
                  <View style={{margin:20}}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>
                      Your Name
                    </Text>
                    <TextInput
                    style={{borderRadius:10, borderWidth: 0.8,
                        marginVertical:10,
                      textAlign: 'center',
                      borderColor: `#add8e6`,}}
                    placeholder="Enter your Name"/>

              <Text style={{fontWeight:'bold',fontSize:16}}>
                      Location
                    </Text>
                    <TextInput
                    style={{borderRadius:10, borderWidth: 0.8,
                        marginVertical:10,
                      textAlign: 'center',
                      borderColor: `#add8e6`,}}
                    placeholder="Enter your City"/>


             <Text style={{fontWeight:'bold',fontSize:16}}>
                      Mobile No
                    </Text>
                    <TextInput
                    style={{borderRadius:10, borderWidth: 0.8,
                        marginVertical:10,
                      textAlign: 'center',
                      borderColor: `#add8e6`,}}
                    placeholder="Enter your Mobile No"/>
                        
                        <Text style={{fontWeight:'bold',fontSize:16}}>
                      Email id
                    </Text>
                    <TextInput
                    style={{borderRadius:10, borderWidth: 0.8,
                        marginVertical:10,
                      textAlign: 'center',
                      borderColor: `#add8e6`,}}
                    placeholder="Enter your Email id (optional)"/>
                  </View>

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
                        Submit Details
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
            }




            </ActionSheet>
          </View>

          <View style={{marginTop: '25%'}}>
            <TouchableOpacity
              onPress={() => actionSheetRef.current?.setModalVisible()}>
              <Text
                style={{
                  marginHorizontal: 80,
                  padding: 15,
                  textAlign: 'center',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 15,
                  marginBottom: 15,
                  fontWeight: 'bold',
                }}>
                Register/login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
