import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Intro from "../intro"

export default function Evolution() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}> Evoluindo junto{`\n`} com você!</Text>
      </Animatable.View>
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
    backgroundColor: '#0B1A1F'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  text: {
    fontSize:20,
    color:'white',
    backgroundColor:'black',
    textAlign:'center',
    marginBottom:50
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
})