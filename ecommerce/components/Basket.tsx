import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Button,
  Image
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Basket = () => {
  const [productDetail, setproductDetail] = useState<any>([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getBasket();
    }
  }, [isFocused]);
  const getBasket = async () => {
    let basket: any = await AsyncStorage.getItem('basket');
    setproductDetail(JSON.parse(basket));
  };
  const handleDelete = (id: any) => {
    const updatedFavorites = productDetail.filter(
      (item: any) => item.id !== id,
    );
    AsyncStorage.setItem('basket', JSON.stringify([...updatedFavorites]));
    setproductDetail(updatedFavorites);
  };
  const Dec = (id: any) => {
    let item: any = productDetail.find((pr: any) => pr.id === id);

    item.count++;

    AsyncStorage.setItem('basket', JSON.stringify(productDetail));
    setproductDetail([...productDetail]);
  };
  const Inc = (id: any) => {
    let item: any = productDetail.find((pr: any) => pr.id === id);

    if (item.count > 1) {
      item.count--;
      AsyncStorage.setItem('basket', JSON.stringify(productDetail));
      setproductDetail([...productDetail]);
    } else {
      alert('You can not decrease the product quantity to 1');
    }
  };
  let totalPrice = () => {
    let total = 0;
    if (productDetail.length > 0) {
      productDetail.forEach((item: any) => {
        total += item.price * item.count;
      });
    }
    return total;
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={productDetail}
        renderItem={({item}: any) => {
          return (
            <View>
              <View style={styles.item}>
                <View>
                  <Image
                    source={{uri: `${item.photo}`}}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </View>
                <View style={{marginLeft:30}}>
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
                    From $ {item.price * item.count}
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: '#5956E9',
                      marginTop: 8,
                      padding: 5,
                      borderRadius: 5,
                      width:60
                    }}
                    onPress={() => handleDelete(item.id)}>
                    <Text style={{color: '#fff', fontFamily: 'Raleway-Bold'}}>
                      Delete
                    </Text>
                  </Pressable>
                </View>
                <View style={{marginLeft: 30,alignItems:"center"}}>
                  <Button title="+" onPress={() => Dec(item.id)} />
                  <Text style={{color: 'black'}}>{item.count}</Text>
                  <Button title="-" onPress={() => Inc(item.id)} />
                </View>
              </View>
            </View>
          );
        }}
      />
      {productDetail && (
        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row',marginBottom:60,marginHorizontal:35}}>
            <Text style={{fontSize: 26, color: 'black',}}>Total: </Text>
            <Text style={{fontSize: 26, color: '#5956E9',fontFamily:"Raleway-Bold"}}>${totalPrice()}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Basket;
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
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#5956E9',
    marginHorizontal: 80,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
