import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Cadastro from "../cadastro"

export default function Intro() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}> Evolução</Text>
        <Text style={styles.message2}> O intuito do projeto é trazer facilidade às pessoas para consumirem conteúdos e estratégias para sua evolução. Além de motivar e mostrar o avanço/crescimento dos seus esforços e dedicações.</Text>
      </Animatable.View>
      <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate(Cadastro)}>
          <Text style={styles.registerText}>Teste</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1A1F'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    marginTop:'65%',
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40,
    color: '#fff'
    /*fontWeight: 'bold'*/
  },
  message2: {
    marginTop:'65%',
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40,
    color: '#fff'
    /*fontWeight: 'bold'*/
  },
  text: {
    fontSize:20,
    color:'white',
    backgroundColor:'black',
    textAlign:'center',
    marginBottom:50
  },

  button: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})