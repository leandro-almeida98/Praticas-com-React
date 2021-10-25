import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
class App extends Component{

  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
       <View style={{flex:1, backgroundColor:'#ddd', paddingTop:31}}>

        <View style={{height:60 , flexDirection:'row', backgroundColor: 'blue', padding:5}}>
          <View style={{flex:1, backgroundColor: 'red',padding:2, justifyContent: 'center', alignItems: 'flex-start'}}>
            <View style={{width:40, height:40, backgroundColor: 'blue', }}>
            
            </View>
          </View>
          <View style={{flex:7, backgroundColor: 'green', padding:2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width:250, height:40, backgroundColor: 'gray', }}>
            
            </View>
          </View>
          
          <View style={{flex:1, backgroundColor: 'gray', padding:2, justifyContent: 'center', alignItems: 'flex-end'}}>
            <View style={{width:40, height:40, backgroundColor: 'red', }}>
            
            </View>
          </View>
          
          

        </View>
        <View style={{flex:1, backgroundColor: 'red'}}></View>
        <View style={{height:60 , backgroundColor: 'green', flexDirection: 'row'}}>
          <View style={{flex:1, borderColor: 'red', borderWidth:1}}></View>
          <View style={{flex:1, borderColor: 'red', borderWidth:1}}></View>
          <View style={{flex:1, borderColor: 'red', borderWidth:1}}></View>
        </View>
         



           
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