import React from "react"
import { View, StyleSheet, Text, Button, Modal as NewModal } from "react-native"

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyleIntro}>estas seguro de eliminar la tarea:</Text>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <View style={styles.modaloptions}>
            <Button title="Eliminar" color={"red"} onPress={() => actionDeleteItem()} />
            <Button title="Mantener" onPress={() => onDismissModal(false)} />
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
    margin: 15
  },
  modalTextStyleIntro: {
    fontSize: 15,
    margin: 15
  },
  modaloptions: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  }

})