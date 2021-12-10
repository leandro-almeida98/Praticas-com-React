import React, {useState, useEffect} from 'react'
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {editLogin, editPswd} from '../Actions/AuthActions.js'
import { TextInput } from 'react-native-paper';



export function Login(props){
    function evtButton(){
        // alert("Logado")
    }
    return (
        <View style={styles.container}>
           <TextInput 
            Left={
                <TextInput.Icon name="at" size={25} color="black" />
            }
           label="Login" value={props.login} onChangeText={(txt)=> props.editLogin(txt)} style={styles.txtinput} placeholder="lxadm" />
           <TextInput label="Senha" value={props.pswd} onChangeText={(txt)=> props.editPswd(txt)} style={styles.txtinput} placeholder="********" />
           <TouchableOpacity onPress={()=> evtButton()} style={styles.button} >
                <Text style={styles.txt} >Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    txtinput: {
        width:'80%',
        borderColor: 'gray',
        backgroundColor:'white',
        borderWidth: 0.5,
        // padding:10,
        marginBottom:20,
        height:50,
        // borderRadius:5,
    },

    button: {
        width:'80%',
        padding:10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginBottom: 30,
    },
    txt:{
        color: 'white',
        fontSize:18
    }
})

const mapStateToProps =(state)=>{
    return {
        login:state.auth.login, 
        pswd:state.auth.pswd
    }
};
const LoginConnect = connect(mapStateToProps, {editLogin, editPswd})(Login);
export default LoginConnect;
