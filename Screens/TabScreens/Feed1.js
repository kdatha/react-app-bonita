import * as React from 'react';
import {Button, View, Text, Image,TextInput} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../TabScreens/Feed';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {CustomDrawer1} from '../CustomDrawer/CustomDrawer';

//images
import User from '../Images/user.png';
import Key from '../Images/fe_key.png';
import Gift from '../Images/gift.png';
import City from '../Images/healthicons_city-outline.png';
import Share from '../Images/share&earn.png';
import Call from '../Images/call.png';
import Logout from '../Images/logout.png';
import HomeIcon from '../Images/Home.png';
import Appointment from '../Images/Appointment.png';
import Offers from '../Images/Offers.png';
import Products from '../Images/Products.png';
import Search from '../Images/search.png';
import Cart from '../Images/Cart.png';

// Tab navigation Screens
import HomeTab from '../TabScreens/HomeTab.js';
import CartScreen from '../TabScreens/CartScreen.js';
const Stack = createStackNavigator();

function HomeScreen() {
  const navigation = React.useContext(NavigationContext);
  return (
    // <Stack.Navigator initialRouteName="1Login"
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center',
         // alignSelf:'baseline',
        //  marginHorizontal:30
        }}>
        <Image source={User} height={20} width={20} />
        <Text style={{marginLeft:15}}>My account</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View  style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center',
         // alignSelf:'baseline',
        //  marginHorizontal:30
        }}>
         <Image source={Key} height={20} width={20} />
          <Text style={{marginLeft:15}}>Change Password</Text>
        </View>
       </TouchableOpacity>
     
       <TouchableOpacity>
      <View style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center'}}>

         <Image source={Gift} height={20} width={20} />
        <Text style={{marginLeft:15}}>Offers & Gifts</Text>
      </View>
      </TouchableOpacity>



      <TouchableOpacity>
      <View  style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center'}}>
        <Image source={Share} height={20} width={20} />
        <Text style={{marginLeft:15}}>Shares & Earn</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View  style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center'}}>
        <Image source={City} height={20} width={20} />
        <Text style={{marginLeft:15}}>Change City </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View  style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center'}}>
        <Image source={Call} height={20} width={20} />
        <Text style={{marginLeft:15}}>Call Us </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View  style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'grey',
          padding: 15,
          margin: 15,
          alignItems:'center'}}>
        <Image source={Logout} height={20} width={20} />
        <Text style={{marginLeft:15}}>Logout </Text>
      </View>
      </TouchableOpacity>
    </View>
    // {/* <Stack.Screen name="Login" component={LoginScreen} />
    // <Stack.Screen name="Home" component={HomeScreen} />
    //  <Stack.Screen name="Forgot" component={ForgotPassword} />
    //    <Stack.Screen name="Sigin" component={Sigin} />
    // <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    //   </Stack.Navigator>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        activeColor="pink"
        inactiveColor="green"
        component={HomeTab}
        options={{headerShown: false,
            tabBarIcon:({color}) => (
                <Image source={HomeIcon} style={{width:25, height:25}} />
            )
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={SettingsScreen}
        options={{headerShown: false,
            tabBarIcon:({color}) => (
                <Image source={Appointment} style={{width:25, height:25}} />
            )
            }}
      />
      <Tab.Screen
        name="Offers"
        component={HomeScreen}
        options={{headerShown: false,
            tabBarIcon:({color}) => (
                <Image source={Offers} style={{width:25, height:25}} />
            )
        }}
      />
      <Tab.Screen
        name="Products"
        component={SettingsScreen}
        options={{headerShown: false,
            tabBarIcon:({color}) => (
                <Image source={Products} style={{width:25, height:25}} />
            )
        }}
      />
    </Tab.Navigator>
  );
}

function LogoTitle(props) {
  return (
    <View style={{flexDirection: 'row',borderWidth:1,padding:5,marginTop:2,borderRadius:10,alignItems:'center',marginHorizontal:10,}}>
    <Image source={Search} style={{width:25, height:25}} />
      <TextInput
      style={{marginLeft:5,alignItems:'center',width:120}}
       placeholder={"search here"} />
    </View>
  );
}

export default function Feed1() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <HomeScreen />}>
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={({navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity  onPress={() => navigation.navigate('CartScreen')}>
               <Image source={Cart} height={20} width={20}
               />
             </TouchableOpacity>
            </View>
          ),
          title: '',
          headerTitle: props => <LogoTitle />,
          // headerLeft: () => (
          //   <View style={{ flexDirection: 'row' }}>
          //     <Text onPress={() => navigation.toggleDrawer()}>LeftIcon</Text>
          //     <Text onPress={() => navigation.toggleDrawer()} style={{alignSelf:'center',alignContent:'center',marginHorizontal:15}}>SearchBarIcon</Text>
          //   </View>
          // ),
        })}
      />
      <Drawer.Screen name="vinoda" component={MyTabs} />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
    </Drawer.Navigator>
  );
}
