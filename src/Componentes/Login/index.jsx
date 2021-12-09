import React, {useState, useEffect} from 'react'
import {View,Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux'


export function Login(props){
    const[login, setLogin] = useState('')
    const[pswd, setPswd] = useState('')

    function evtButton(){
        // alert("Logado")
    }


    useEffect(()=>{
        setLogin(props.login)
        setPswd(props.pswd)
    },[])


    return (
        <View style={styles.container}>
           <TextInput value={login} onChangeText={(txt)=> setLogin(txt)} style={styles.txtinput} placeholder="Login" />
           <TextInput value={pswd} onChangeText={(txt)=> setPswd(txt)} style={styles.txtinput} placeholder="Senha" />
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

const mapStateToProps =(state)=>{
    return {
        login: state.auth.login, 
        pswd:   state.auth.pswd
    }
};
const LoginConnect = connect(mapStateToProps)(Login);
export default LoginConnect;
