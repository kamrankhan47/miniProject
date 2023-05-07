import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GetStartedScreen = ({navigation}:any) => {
  return (
    <View style={styles.mainscreen}>
      <View>
        <Text style={styles.text1}>Find your Gadget</Text>
      </View>
      <View style={{marginTop: 30}}>
        <Image
          source={require('../src/assets/startpage.png')}
          style={{width: 400, height: 400}}
        />
      </View>

      <View style={{marginTop:30}}>
        <TouchableOpacity  style={{backgroundColor: 'white', borderRadius: 10}} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.startbutton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    mainscreen: {
        flex: 1,
        backgroundColor: '#5956E9',
        alignItems: 'center',
      },
      text1: {
        color: 'white',
        width: 292,
        fontSize: 60,
        fontFamily: 'Raleway-Black',
      },
      startbutton: {
        paddingHorizontal: 80,
        padding: 20,
        color: '#5956E9',
        fontSize: 20,
      },

})