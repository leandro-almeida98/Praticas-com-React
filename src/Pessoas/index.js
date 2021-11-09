import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Pessoa({navigation, route}){
  return(
    <View>
      <Text>Pessoa: {route.params.nome}</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    flatlist:{
      height:100,
      paddingLeft:20,
      justifyContent: 'center'  
    }
  });
 