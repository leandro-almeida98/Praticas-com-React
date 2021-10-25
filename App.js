import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
class App extends Component{

  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
       <View style={{flex:1, backgroundColor:'#ddd'}}>

<View style={{height:65 , backgroundColor: 'blue'}}></View>
         <View style={{flex:1, backgroundColor: 'red'}}></View>
         <View style={{height:60 , backgroundColor: 'green'}}></View>
         



           
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