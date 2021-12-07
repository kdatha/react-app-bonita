import React, {Component} from 'react';
import {
  FlatList,
  View,
  Dimension,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import {Card} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

export default class HomeTab extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }

  renderItemComponent = item => {
    return (
        <View style={{
            marginTop:10,
            backgroundColor:'blue',
            height:width/2.6,
            width :width*0.8,
            marginHorizontal:10,
            borderRadius:12
        }}>
       <Text>Api to integrate image</Text>
        </View>
        
    //   <Card>
    //     <Image source={require('../Images/legs.png')} height={10} width={10} />
    //   </Card>
    );
  };

  renderItemComponent2 = item => {
    return (
      <View style={{marginBottom:10}}>
        <Card>
          <Image source={require('../Images/girl.png')} />
          <Text style={{textAlign: 'center', padding: 10}}>Saloon at home</Text>
        </Card>
      </View>
    );
  };

  renderItemComponent3 = item => {
    return (
      <View>
        <Card>
          <Image source={require('../Images/hands.png')} />
          <Text style={{textAlign: 'center', padding: 10}}>Saloon at home</Text>
        </Card>
      </View>
    );
  };

  render() {
    return (
      <View>
        <ScrollView>
          <SafeAreaView>
            <FlatList
              horizontal
              
              data={DATA}
              renderItem={item => this.renderItemComponent(item)}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text>Our Services</Text>
          </View>
          <SafeAreaView>
            <FlatList
              horizontal
              data={DATA}
              renderItem={item => this.renderItemComponent2(item)}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>

          <SafeAreaView>
            <FlatList
              horizontal
              data={DATA}
              renderItem={item => this.renderItemComponent3(item)}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
