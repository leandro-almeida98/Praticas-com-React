import React, {useState} from 'react'
import {View,Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {editLogin, editPswd} from '../Actions/AuthActions'
export function Cadastro(props, {navigation}){
    function evtButton(){
        alert("Cadastrado")
    }

    return (
        <View style={styles.container}>
           <TextInput value={props.login} onChangeText={(txt)=> props.editLogin(txt)} style={styles.txtinput} placeholder="Login" />
           <TextInput value={props.pswd} onChangeText={(txt)=> props.editPswd(txt)} style={styles.txtinput} placeholder="Senha" />
           <TouchableOpacity onPress={()=> evtButton()} style={styles.button} >
                <Text style={styles.txt} >Cadastrar</Text>
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
        borderWidth: 0.5,
        padding:10,
        marginBottom:20
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

const mapStateToProps = (state) =>{
    return{
        login:state.auth.login,
        pswd:state.auth.pswd
    }
}

const CadastroConnect = connect(mapStateToProps,{editLogin, editPswd})(Cadastro);

export default CadastroConnect;