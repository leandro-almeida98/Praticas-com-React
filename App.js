import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
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

        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={ (texto) => this.setState({input: texto})}
         />

<Button title="Entrar" onPress={this.entrar} />
        <Text style={styles.texto}>
        {this.state.nome}
        
        </Text>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40
  },
  input:{
    height:45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }


});



export default App;