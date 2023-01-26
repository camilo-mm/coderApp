import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import variables from '../constants/variables';

const ListScreen = ({
    taskList,
    printItem,
}) =>{
  return (
    <View style={styles.viewDos}>
        <FlatList
          data={taskList}
          renderItem={printItem}
          keyExtractor={(item) => item.task}
        />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    viewDos: {
      flexDirection: 'row',
      marginBottom: 25,
      backgroundColor: variables.grayColor,
      borderRadius: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
    },
    itemOnList: {
      backgroundColor: variables.backgroundPrimary,
      alignSelf: 'stretch',
      margin: 7,
      borderRadius: 15,
      padding: 15,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
  
    }
  });
  
