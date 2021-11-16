import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image,Button, TouchableOpacity,Modal, SafeAreaView, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const camRef = useRef(null)
  const [capturedPhoto, setCapturedPhoto] = useState('https://webservice.inbitdev.com/img/20211116095040dc1a0e5bc4ed3389097319ef8ee2fe42bff7a7a3.jpg')
  const [nome, setNome] = useState('')
  const serverURL = 'https://webservice.inbitdev.com/?uploadfile'
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {


    (async () =>{
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      setCapturedPhoto(result.uri);
      setImage(result);
    }
  };

  async function takePicture(){
    if(camRef){
        const data = await camRef.current.takePictureAsync()
        setCapturedPhoto(data.uri)
        setImage(data)
    }
  }

  async function sendForm(){
    sendImage();
  }

  async function sendImage(){
    let data = image;
    setLoading(true);
    var link = 'http://webservice.inbitdev.com/?uploadfile';
    var metodo = 'POST';
    var Autorizacao = 'Authorization';
    let array = data.uri.split('/')
    let formdata = new FormData();

      formdata.append('upfile', {
        uri: data.uri,
        type: 'image/png', 
        name: array[array.length - 1].split('.')[0],
        tmp_name: data.uri
        
      });
      setLoading(true);
      await axios({
      url    : link,
      method : metodo,
      data   : formdata,
      headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
                }
      })
      .then(function (response) {
              console.log("response :", response.data);
              setLoading(false);
            //  setNome(response.data['NOME']);
      })
      .catch(function (error) {
          console.log("error from image :");
      })

  }

    return (
      <SafeAreaView style={styles.container}>
          <Modal transparent={true} animationType="fadeIn" visible={loading} style={{flex:1, backgroundColor:"blue", width:250, height: 250, alignItems:'center',justifyContent: 'center'}}>
            <View style={{width:"100%", height:"100%", opacity:0.7, backgroundColor:'black', justifyContent: 'center', alignItems: "center"}}>
                <ActivityIndicator color="white" size={150}  style={{}}/>
            </View>
          </Modal>
          

          <Camera style={{flex:1}} type={type} ref={camRef} >
              <View style={{flex:1,backgroundColor: 'transparent', flexDirection: 'row'}}>
                    <TouchableOpacity 
                      onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back) }} 
                      style={{position: 'absolute',bottom: 20, left: 20}}
                    >
                      <Text style={{fontSize: 20, marginBottom: 13, color: '#FFF'}}> Trocar </Text>
                    </TouchableOpacity>
              </View>
          </Camera>

          <TouchableOpacity style={styles.button} onPress={takePicture} >
                  <FontAwesome name="camera" size={23} color="#FFF" />
          </TouchableOpacity>

          <Image style={{width: 250, height: 250, borderRadius: 125}} source={{uri: capturedPhoto}}/>

          <Text>{nome}</Text>

          <Button title="Pick an image from camera roll" onPress={pickImage} />
          <Button title="ENVIAR" onPress={sendForm} />
    
          

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