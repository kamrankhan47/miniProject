import {Image, StyleSheet, Text, View,TouchableOpacity, FlatList, Pressable} from 'react-native';
import React, { useState } from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorites = ({navigation,route}:any) => {
  const [originalProducts, setoriginalProducts] = useState([])
    useFocusEffect(() => {

        AsyncStorage.getItem('favorite')
            .then(data => {
                let datas = JSON.parse(data ?? '[]');
                setoriginalProducts(datas)
            })

        
    })

    const handleDelete = (id:any)=> {
        
          const updatedFavorites = originalProducts.filter((item : any) => item.id !== id);
          AsyncStorage.setItem('favorite', JSON.stringify(updatedFavorites));
          setoriginalProducts(updatedFavorites);
       
      };

      if(originalProducts.length===0){

        return (
    <View style={{alignItems: 'center'}}>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            fontFamily: 'Raleway-Black',
          }}>
          Favorites
        </Text>
      </View>
      <View style={{marginTop: 50}}>
        <Image
          source={require('../src/assets/sally.png')}
          style={{height: 300, width: 300}}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Raleway-Black',
            fontWeight: '700',
            color: 'black',
          }}>
          No favorites yet
        </Text>
      </View>
      <View style={{marginHorizontal: 100, alignItems: 'center'}}>
        <Text>Hit the orange button down</Text>
        <Text>below to Create an order</Text>
      </View>

      <View style={{marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:"#58C0EA",borderRadius:10}} onPress={()=>{navigation.navigate("Home")
        }}>
          <Text style={{paddingHorizontal:80,padding:20,color:"#FFFFFF",fontFamily:"Raleway-Black",fontSize:20}}>Start ordering</Text>
        </TouchableOpacity>
        </View>
    </View>
  );}
  return (
    
    <View style={styles.container}>
      <FlatList
        data={originalProducts}
        renderItem={({item}:any) => {
          return (
            <View style={styles.item}>
              <Image
                source={{uri: `${item.photo}`}}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Raleway-Bold',
                  marginTop: 10,
                }}>
                {item.name}
              </Text>
              <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
                {item.serias}
              </Text>
              <Text style={{color: '#5956E9', fontFamily: 'Raleway-Bold'}}>
                From $ {item.price}
              </Text>
              <Pressable
                style={{
                  backgroundColor: '#5956E9',
                  marginTop: 8,
                  padding: 5,
                  borderRadius: 5,
                }}
                onPress={() => handleDelete(item.id)}>
                <Text style={{color: '#fff', fontFamily: 'Raleway-Bold'}}>
                  Delete
                </Text>
              </Pressable>
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
        
    )
  
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  item: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
});
