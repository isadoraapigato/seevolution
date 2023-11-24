import React from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Intro from '../intro'

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container} >
      
      <View>
        <Text style={styles.text}>See Evolution</Text>
      </View>
      <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate(Intro)}>
          <Text style={styles.registerText}>Teste</Text>
        </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0B1A1F'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
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
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})