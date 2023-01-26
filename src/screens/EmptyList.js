import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import variables from '../constants/variables';

const EmptyList = () =>{
  return (
    <View style={styles.viewEmpty}>
        <Text style={styles.textEmpty}>Tu Lista está Vacia</Text>
        <Text style={styles.textEmpty2}>Agrega una tarea!! </Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
    viewEmpty: {
      flexDirection: 'column',
      marginBottom: 25,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    textEmpty: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'pacifico'
    },
    textEmpty2: {
        fontSize: 25,
    }
  });
  
