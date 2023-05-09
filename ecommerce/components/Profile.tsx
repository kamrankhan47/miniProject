import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Profile = ({}) => {
  return (
    <View>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20,color:"#000000",fontWeight:"700"}}>Profile</Text>
        </View>
      <View style={{backgroundColor:"white",alignItems:"center",marginTop:70,marginHorizontal:20,borderRadius:20,height:160}}>
        <View style={{alignItems:"center"}} >
        <Image
          source={require('../src/assets/profile.png')}
          style={{width: 76, height: 76,position:"absolute",top:-50}}
        />
        </View>
        <View><Text style={{fontSize:20,color:"#000000",fontWeight:"700",marginTop:30}}>Rosina Doe</Text></View>
        <View style={{alignItems:"center"}}>
          <Text style={{fontFamily: 'Raleway-Black',}}>Address 43 Oxford Road</Text>
          <Text style={{fontFamily: 'Raleway-Black',}}>M13 4GR</Text>
          <Text style={{fontFamily: 'Raleway-Black',}}>Manchester UK</Text>


        </View>
      </View>
      
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

})