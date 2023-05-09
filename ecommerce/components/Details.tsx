import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SvgPath33964 from '../src/components/icons/Path33964';
import SvgPath33961 from '../src/components/icons/Path33961';
import SvgStroke3 from '../src/components/icons/Stroke3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Details = ({route,navigation}: any) => {
  const [isFavorite, setIsFavorite] = useState<any>(false)
  const {id} = route.params;
  const [productDetail, setproductDetail] = useState<any>([]);
  const [favorites, setfavorites] = useState<any>([])
  const [basket, setbasket] = useState<any>([])

  const myBasket= () => {
    const Data : any = {
      id: id,
      name:productDetail.name,
      price:productDetail.price,
      photo:productDetail.photo,
      serias:productDetail.serias,
      color:productDetail.color,
      count:1
    }
    AsyncStorage.getItem('basket')
    .then(data => {
        let dat = JSON.parse(data ?? '[]');
        setbasket(dat)
    })
        AsyncStorage.setItem('basket', JSON.stringify([...basket,Data]));
    }
    useEffect(() => {

      axios.get('https://6458002c1a4c152cf98f69ff.mockapi.io/users/'+id)
          .then(response => {
              setproductDetail(response.data)
  
              
          })
            AsyncStorage.getItem('basket').then(data => {
            let basket = JSON.parse(data ?? '[]');
            setbasket(basket);
      
          });
          
          
        }, [])
    
    
  
  const addFunc =() => {
    let FavProduct : favProduct = {
      id: id,
      name:productDetail.name,
      price:productDetail.price,
      photo:productDetail.photo,
      serias:productDetail.series,
      color:productDetail.color
  }
  
  AsyncStorage.getItem('favorite')
  .then((data: any) => {
      let datas = JSON.parse(data ?? '[]');
      setfavorites(datas)
  })
      AsyncStorage.setItem('favorite', JSON.stringify([...favorites,FavProduct]));
      setfavorites(true)
  }
  useEffect(() => {
    AsyncStorage.getItem('favorite').then((data: any) => {
      let favorites = JSON.parse(data ?? '[]');
      setfavorites(favorites);

    });
  },[]);



  useEffect(() => {
    axios
      .get('https://6458002c1a4c152cf98f69ff.mockapi.io/users/' + id)
      .then(response => {
        console.log(response.data);
        console.log('salam');
        setproductDetail(response.data);
      });
  }, []);

  console.log('salam');

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop:10
          
        }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
          <SvgStroke3 />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>addFunc()}>
          <SvgPath33961 />
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={{uri: productDetail.photo}}
          style={{height: 300, width: 300}}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text
          style={{fontFamily: 'Raleway-Black', fontSize: 30, color: 'black'}}>
          {productDetail.name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Raleway-Black',
            color: 'black',
            marginLeft: 40,
          }}>
          Colors
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          marginHorizontal: 40,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 100,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 4,
            padding: 10,
          }}>
          <View
            style={{
              backgroundColor: 'red',
              padding: 10,
              width: 10,
              borderRadius: 1000,
            }}></View>
          <View>
            <Text>Red</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 100,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 4,
            padding: 10,
          }}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              width: 10,
              borderRadius: 1000,
            }}></View>
          <View>
            <Text>Green</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 100,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 4,
            padding: 10,
          }}>
          <View
            style={{
              backgroundColor: 'black',
              padding: 10,
              width: 10,
              borderRadius: 1000,
            }}></View>
          <View>
            <Text>Black</Text>
          </View>
        </View>
      </View>

      <View style={{marginLeft: 40, marginTop: 10}}>
        <Text style={{fontWeight: '700', color: 'black', fontSize: 20}}>
          Get Apple TV+ free for a year
        </Text>
      </View>
      <View style={{marginLeft: 40, marginTop: 10}}>
        <Text>
          Available when you purchase any new iPhone, iPad, iPod Touch, Mac or
          Apple TV, £4.99/month after free trial.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 40,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20, fontFamily: 'Raleway-Black'}}>Price</Text>
        <Text style={{fontSize: 22, color: '#5956E9'}}>
          $ {productDetail.price}
        </Text>
      </View>

      <View style={{marginHorizontal: 40, marginTop: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5956E9',
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={()=>myBasket()}
          >
          <Text style={styles.startbutton}>Add to basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
interface favProduct {
  id:number
  name:String
  price:number
  photo:String
  color:String
  serias:String

}

const styles = StyleSheet.create({
  startbutton: {
    padding: 20,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Raleway-Black',
  },
});
