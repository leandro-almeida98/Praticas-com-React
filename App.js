import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image,Button, TouchableOpacity,Modal, SafeAreaView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/Componentes/Login/index.jsx'
import cadastro from './src/Componentes/Cadastro/index.jsx' 
import home from './src/Componentes/Home/index.jsx'

import {Provider} from 'react-redux'
import {createStore } from 'redux'
import Reducers from './src/Reducers/index'

let store = createStore(Reducers);


export default function App() {
  const Stack = createNativeStackNavigator();


    return (
      <Provider store={store}>
        
        <NavigationContainer >
          <Stack.Navigator >
          <Stack.Screen name="Home" component={home} />
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="cadastro" component={cadastro} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
});