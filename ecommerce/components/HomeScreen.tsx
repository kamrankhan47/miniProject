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
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import Tabs from './Tabs';

const HomeScreen = ({navigation}:any) => {
  const [products, setProducts] = useState<any[]>([]);
  const [originalProducts, setoriginalProducts] = useState<any[]>([])
  
  
  
  useEffect(() => {
  axios
  .get('https://6458002c1a4c152cf98f69ff.mockapi.io/users')
  .then(response => {
    console.log(response.data);
    console.log("salam");
    setProducts(response.data);
    setoriginalProducts(response.data);
  });
  
 
  },[]);

  
  const search = (value:string) => {
    

    
    let filteredProducts : any[]= originalProducts.filter((q : any) => q.name.toLowerCase().includes(value.toLowerCase()));
 
    setProducts([...filteredProducts])
    
}
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate("Details",{id:item.id})}}>
        <View style={styles.productButton}>
              
              <Image
                source={{uri: item.photo}}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 1000,
                  position:"absolute",
                  top:-50
                }}
              />

       
          <View style={{alignItems:"center"}}>
          <Text
              style={{
                fontFamily: 'Raleway-Black',
                fontSize: 20,
                color: '#000000',
                marginTop: 120,
                textAlign:"center"
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway-Black',
                fontSize: 16,
                color: '#868686',
              }}>
              {item.series}
            </Text>
            <Text
              style={{
                color: '#5956E9',
                fontFamily: 'Raleway-Black',
                fontSize: 20,
              }}>
              $ {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: '#F2F2F2'}}>
      <View>
        <TextInput style={styles.input} placeholder="Search"  onChangeText={search}></TextInput>
      </View>
      <View>
        <Text style={styles.text1}>Order online collect in store</Text>
      </View>

      <FlatList
        renderItem={renderItem}
        data={products}
        contentContainerStyle={{gap:20}}
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
    marginTop:50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius:20,
    width:250,
    height:250,
    marginHorizontal:5
  },
});
