import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import { View, Text } from 'react-native'
import React from 'react'

const Tab=createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
    
  )
}

export default Tabs