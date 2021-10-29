import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Pessoa from './src/Pessoas'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isloading:false,
      feed:[
        { id: this.idAleatorio() , nome: 'Matheus', idade: this.idadeAleatoria(), email:'matheus@gmail.com' },
        { id: this.idAleatorio() , nome: 'Leandro', idade: this.idadeAleatoria(), email:'leandro@gmail.com' },
        { id: this.idAleatorio() , nome: 'Andre', idade: this.idadeAleatoria(), email:'andre@gmail.com' },
        { id: this.idAleatorio() , nome: 'Reinaldo', idade: this.idadeAleatoria(), email:'reinaldo@gmail.com' },
        { id: this.idAleatorio() , nome: 'Ulisses', idade: this.idadeAleatoria(), email:'ulisses@gmail.com' },
        { id: this.idAleatorio() , nome: 'Alexandre', idade: this.idadeAleatoria(), email:'alexandre@gmail.com' }
      ]        
    }
    this.refleshh = this.refleshh.bind(this);
  }
 
refleshh(){
  this.setState({
    isloading: true
  })
  this.setState(previousState => ({
    feed: [
      { id: this.idAleatorio() , nome: 'Matheus2', idade: this.idadeAleatoria(), email:'matheus@gmail.com' },
      { id: this.idAleatorio() , nome: 'Leandro2', idade: this.idadeAleatoria(), email:'leandro@gmail.com' },
      { id: this.idAleatorio() , nome: 'Andre2', idade: this.idadeAleatoria(), email:'andre@gmail.com' },
      { id: this.idAleatorio() , nome: 'Reinaldo2', idade: this.idadeAleatoria(), email:'reinaldo@gmail.com' },
      { id: this.idAleatorio() , nome: 'Ulisses2', idade: this.idadeAleatoria(), email:'ulisses@gmail.com' },
      { id: this.idAleatorio() , nome: 'Alexandre2', idade: this.idadeAleatoria(), email:'alexandre@gmail.com' },
      ...previousState.feed
    ]
  }));
  this.setState({
    isloading: false
  })
}
idadeAleatoria(){ 
  return Math.floor((Math.random() * (99 - 18)) +18) ;
}
idAleatorio(){
  return Math.floor((Math.random() * (99999 - 1)) +1) ;
}
  render(){
    return(
       <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:24, color:'white'}}>Flatlist + Refresh</Text>

          </View>
          <FlatList 
            data={this.state.feed}

            keyExtractor = {(item) => item.id}
            refreshing={this.state.isloading}
            onRefresh={this.refleshh}
            renderItem={({item}) => <Pessoa data={item} /> }
          />
       </View>
    );
  }
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

export default App;