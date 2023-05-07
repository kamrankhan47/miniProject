import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://6458002c1a4c152cf98f69ff.mockapi.io/users')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.productButton}>
            <View style={{alignItems:"center"}}>
            <Image
                source={{uri: item.photo}}
                style={{
                  width: 130,
                  height: 130,
                  position: 'absolute',
                  borderRadius:10
                }}
              />
              <View style={{marginTop:150,alignItems:"center"}}>
                <Text style={{fontFamily:"Raleway-Black",fontSize:20,color:"#000000"}}>{item.name}</Text>
                <Text style={{fontFamily:"Raleway-Black",fontSize:16,color:"#868686"}}>{item.series}</Text>
                <Text style={{color:"#5956E9",fontFamily:"Raleway-Black",fontSize:20}}>$ {item.price}</Text>
                </View>
             

            </View>
             
          
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#F2F2F2'}}>
      <View>
        <TextInput style={styles.input} placeholder="Search"></TextInput>
      </View>
      <View>
        <Text style={styles.text1}>Order online collect in store</Text>
      </View>

      <FlatList
        renderItem={renderItem}
        data={products}
        horizontal={true}
        style={{marginTop: 40}}
      />


      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 30,
    borderColor: '#C9C9C9',
  },
  text1: {
    color: '#000000',
    fontSize: 40,
    fontFamily: 'Raleway-Black',
    marginTop: 10,
    marginHorizontal: 20,
  },
  productButton: {
    backgroundColor: '#FFFFFF',
    height: 270,
    width: 220,
    alignItems: 'center',
    marginRight: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
