import React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'

export default function App({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('cadastro')} >
                <Text style={styles.txt}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('login')} >
                <Text style={styles.txt} >Login</Text>
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
    button: {
        width:300,
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
