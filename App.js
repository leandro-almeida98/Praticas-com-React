import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
class App extends Component{

  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
       <View style={styles.area}>
         <Text style={[styles.textoPrincipal, styles.alinhaTexto ] }>Eu sou texto 1</Text>
         <Text style={styles.alinhaTexto  }>Eu sou texto 2</Text>
         <Text style={styles.textoPrincipal}>Eu sou texto 3</Text>
         <Text style={styles.textoPrincipal}>Eu sou texto 4</Text>
       </View>
    );
  }
}


const styles = StyleSheet.create({
area:{
  marginTop:40,
  //backgroundColor: 'blue'
  //alignItems:'center', 
  //display: 'flex'
},
textoPrincipal:{
  fontSize:25,
  color: 'red'
},
alinhaTexto:{
  textAlign: 'center'
}
});



export default App;