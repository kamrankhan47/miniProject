import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import { View, Text } from 'react-native'
import React from 'react'
import Details from './Details';
import Favorites from './Favorites';
import { Home, Path33961, Profile1, Stroke5 } from '../src/components/icons';
import Basket from './Basket';

const Tab=createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false,tabBarIcon:({focused})=><Home fill={focused ? '#5956E9' : 'white'} stroke={focused ? 'white' : '#200E32'}/>}}/>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown: false,tabBarIcon:({focused})=><Profile1 fill={focused ? '#5956E9' : 'white'} stroke={focused ? 'white' : '#200E32'}/>}}/>
        <Tab.Screen name='Favorites' component={Favorites} options={{headerShown: false,tabBarIcon:({focused}) => <Path33961 fill={focused ? '#5956E9' : 'white'} stroke={focused ? 'white' : '#200E32'}/> ,}} />
        <Tab.Screen name='Basket' component={Basket} options={{headerShown: false,tabBarIcon:({focused}) => <Stroke5 fill={focused ? '#5956E9' : 'white'} stroke={focused ? 'white' : '#200E32'}/> ,}} />

        


    </Tab.Navigator>
    
  )
}

export default Tabs