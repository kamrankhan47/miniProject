import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import GetStartedScreen from './components/GetStartedScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Tabs from './components/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={GetStartedScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
      
      </NavigationContainer>
   </>
  );
};

export default App;

const styles = StyleSheet.create({

});
