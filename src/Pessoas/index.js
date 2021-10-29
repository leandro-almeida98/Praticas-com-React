import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Pessoa extends Component{
    render(){
      return(
        <View style={styles.flatlist}>
          <Text>ID:  {this.props.data.id} </Text>
          <Text>Nome: {this.props.data.nome} </Text>
          <Text>Idade:  {this.props.data.idade} </Text>
          <Text>Email: {this.props.data.email} </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    flatlist:{
      height:100,
      paddingLeft:20,
      justifyContent: 'center'  
    }
  });
  export default Pessoa;