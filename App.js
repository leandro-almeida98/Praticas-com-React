import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Olá Mundoss!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome){
    if(this.state.nome ==  nome){
      this.setState({
        nome: 'Leandro'
      })
    }else{
      this.setState({
        nome: nome
      })
    }
    
  }

  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
      // <View style={styles.container}>

        <LinearGradient start={{x: 1, y: 0}} end={{x: 1, y: 1}} colors={['#120BD9', '#0810A6', '#0810A6', '#0A13BF']} style={styles.linearGradient}>
         
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['red', '#0A13BF']} style={styles.linearGradient2}>
         </LinearGradient>
{/*        

        
        <Button title="Entrar" onPress={ () => this.entrar('Geovane')} />

        <Text style={{fontSize: 23, color: 'white', textAlign: 'center'}}>
          {this.state.nome}
        </Text>

        <Jobs largura={412} altura={300} nome="Steve Jobs" imgurl={img}/> */}

       </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:35,
    borderRadius: 5
  },
  linearGradient2: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:35,
    borderRadius: 5,
    width:100,
    height:10,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});


class Jobs extends Component{

  render(){
    return(
      <View>
      <Image 
        source = { { uri: this.props.imgurl }}
        style = { { width: this.props.largura, height: this.props.altura } } 
      />
      <Text style={styles.text}>{this.props.nome}</Text>
      </View>
    );
  }
}

export default App;