import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [status, setStatus] = useState();

  

  return (
    <View style={styles.container}>

      <Text>SWITCH ABAIXO</Text>
      <Switch
      // style={{ba}}
        trackColor={{true: 'red', false: 'grey'}}
        thumbColor={{true: 'blue', false: 'green'}}
        value={status}
        onValueChange={ (valorSwitch) => setStatus(valorSwitch)}

      />
      <Text>{(status)? "Ativo": "Inativo"}</Text>

      

    </View>
  );
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
    flex:1,
    marginTop:30
  }
});

