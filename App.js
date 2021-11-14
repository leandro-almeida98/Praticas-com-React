import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const camRef = useRef(null)
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [nome, setNome] = useState('')
  const serverURL = 'https://webservice.inbitdev.com/?uploadfile'

  useEffect(() => {


    (async () =>{
      const {status} = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()

  }, [])

  if(hasPermission === null){
    return <View/>
  }

  if(hasPermission === false){
    return <Text>Acesso negado!</Text>
  }

  async function takePicture(){

    if(camRef){
        const data = await camRef.current.takePictureAsync()
        setCapturedPhoto(data.uri)
        let array = data.uri.split('/')
        setNome(array[array.length - 1])
        // console.log(data)

        let formdata = new FormData();

        formdata.append('image', {
          uri: data.uri,
         type: 'image/png', 
         name: array[array.length - 1].split('.')[0],
         tmp_name: data.uri
         
       });

       axios({
        url    : 'http://192.168.3.118/webservice/?uploadfile',
        method : 'POST',
        data   : formdata,
        headers: {
                     Accept: 'application/json',
                     'Content-Type': 'multipart/form-data',
                     'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
                 }
             })
             .then(function (response) {
                     console.log("response :", response.data);
            })
            .catch(function (error) {
                     console.log("error from image :");
            })
    }

  }

  return (
    <SafeAreaView style={styles.container}>

        <Camera 

            style={{flex: 1}}
            type={type}
            ref={camRef}
        >
            <View style={{flex:1,backgroundColor: 'transparent', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => {
                    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back)
                    }
                    } style={{position: 'absolute',bottom: 20, left: 20}}>
                          <Text style={{fontSize: 20, marginBottom: 13, color: '#FFF'}}> Trocar </Text>
                  </TouchableOpacity>
            </View>
        </Camera>

        <TouchableOpacity style={styles.button} onPress={takePicture} >
                <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>

        <Image style={{width: 250, height: 250, borderRadius: 125}} source={{uri: capturedPhoto}}/>

        <Text>{nome}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
});