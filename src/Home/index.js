import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Home({navigation}){
  return(
    <View>
      {/* <Text>Home</Text> */}
        <Button 
            title = "Pessoa"
            onPress={() => navigation.navigate('Pessoa', {nome:'Leandro'})}
        />
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
 