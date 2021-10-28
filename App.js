import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      this.setState({nome: ''});
      return
    }
    this.setState({nome: 'Bem vindo '+this.state.input});
  }

  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
       <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false} horizontal={true} snapToEnd={true} >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
         </ScrollView>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40
  },
  box1:{
    backgroundColor: 'red',
    height:250,
    width:407
    
  },
  box2:{
    backgroundColor: 'green',
    height:250,
    width:407
  },
  box3:{
    backgroundColor: 'blue',
    height:250,
    width:407
  },
  box4:{
    backgroundColor: 'gray',
    height:250,
    width:407
  }


});



export default App;