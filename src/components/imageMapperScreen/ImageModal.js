import { Modal, TouchableWithoutFeedback, View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import store from '../../rematch/store'
import TextInputStyled from '../findingScreen/TextInput'
import RadioButton from '../RadioButton'
import Title from '../Title'
import HandImage from './HandImage'

export default function ImageModal({modalVisible, setModalVisible, onPress, sideName, id}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={() => {store.dispatch.image.removeImage(sideName, id); setModalVisible(!modalVisible)}}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Poranenia</Text>
          <RadioButton 
            onPress={(state) => onPress('sine', state)}
            // initial={store.getState().session.vzzs}
            style={{
              alignSelf: 'stretch', 
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 55,
              paddingHorizontal: 20,
              paddingVertical: 3,
              borderBottomWidth: 1,
              borderBottomColor: '#000'
            }}
            Title={() => Title({title: 'Sine', styleTitle: {fontSize: 20}})}
          />
          <HandImage text='Porvrchová rana' source={'x'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <HandImage text='Tepenné krvácanie' source={'o'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <HandImage text='Otvorená zlomenina' source={'om'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <HandImage text='Zlomenina' source={'mm'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <HandImage text='Amputácia' source={'mmx'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <HandImage text='Popalenina st.' source={'lines'} onPress={(state) => onPress('fillWith', state)}></HandImage>
          <Pressable style={{
              alignSelf: 'stretch',
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              paddingHorizontal: 20,
              paddingVertical: 3,
              alignItems: 'center',
            }}
          >
            <TextInput 
              style={{
                flex: 1,
                width: 0,
                marginRight: 20,
                borderBottomWidth: 1,
                borderRadius: 4,
                borderColor: '#000',
                backgroundColor: '#fff',
                fontSize: 20
              }}
            />
            <RadioButton
              // initial={item.checked.right}
              // onPress={(state) => { onPress(section, item.title, state)}}
              // style={{padding: 14}}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    // padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    // elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    // height: 55,
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    textAlign: "center",
    fontSize: 25
  }
})