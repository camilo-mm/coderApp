import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Modal from './src/components/Modal';

export default function App() {

  const [valueInput, setValueInput] = React.useState('')
  const [taskList, setTaskList] = React.useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisble, setModalVisible] = useState(false)

  const onChangeValueInput = text => {
    setValueInput(text)
  }

  const addTaskItem = ()=>{
    const taskobject = {itemTask: valueInput, completed: false}
    setTaskList(prevState => [...prevState, taskobject])
    setValueInput("")
  }

  const completeTask = (item) =>{
      item.completed = !item.completed;
      setTaskList( [ ...taskList ] ) 
  }

  const printItem = ({item}) =>(
    <View style={styles.itemOnList} >
      <AntDesign name={item.completed ? "checkcircle" : "check"} size={24} color="black" onPress={() => completeTask(item)} /> 
      <Text>{item.itemTask}</Text>
      <AntDesign name="delete" size={24} color="red" onPress={() => handleModal(item)} />
    </View>
  )

  const deleteTaskList = ()=>{
    setTaskList([])
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    console.log(item.itemTask)
    setTaskList(prevState => prevState.filter(element => element.itemTask !== item.itemTask))
    setModalVisible(!modalVisble)
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewUno}>
        <Text style={styles.title}>Lista de tareas</Text>
        <View style={styles.contentAddList}>
          <TextInput 
          style={styles.input}
          onChangeText={onChangeValueInput}
          value={valueInput}
          placeholder="Ingresa una tarea"
          />
          <Button
            title="Agregar"
            onPress={addTaskItem}
          />
        </View>
      </View>
      <View style={styles.viewDos}>
        <FlatList
          data={taskList}
          renderItem={printItem}
          keyExtractor={(item) => item.task}
        />
      </View>
      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
      {/* <Button
            title="Borrar todo"
            onPress={deleteTaskList}
      /> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  viewUno: {
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 80
  },
  title:{
    fontSize: 40,
    color: '#000',
  },
  contentAddList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDos: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#f1f1f1',
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
    backgroundColor: "#FFFFFF",
    alignSelf: 'stretch',
    margin: 7,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",

  }
});
