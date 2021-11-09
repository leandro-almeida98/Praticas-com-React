import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Pessoa from './src/Pessoas'
import Home from './src/Home'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component = {Home}
          options = {{title: "Home"}}
        />
        <Stack.Screen 
          name = "Pessoa"
          component = {Pessoa}
          options = {{title: "Pessoa"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop:30,
    height:60, 
    backgroundColor: 'green',
    justifyContent:'center', 
    alignItems:'center'
  },
  container:{
    flex:1  
  }
});

