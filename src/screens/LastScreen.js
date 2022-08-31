import React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import { TextInput } from 'react-native-paper'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function LastScreen() {
  const navigation = useNavigation();
  // const { getItem, setItem } = useAsyncStorage('localStorage');
  const downloadState = async (value) => {
    try {
      // const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('download', value)
    } catch (error) {
      console.log(error)
    }
  }
  const remove = async () => {
    // console.log(AsyncStorage.getItem('localData'));
    try {
      await AsyncStorage.removeItem('localData')
      const jsonValue = await AsyncStorage.getItem('localData')
      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
      // console.log(AsyncStorage.getItem('localData'));
    } catch(e) {
      console.log(e);
      // remove error
    }
    console.log(AsyncStorage.getItem('localData'));
  }

  return (
    <ScrollView style={stylesGlobal.container}>
      <View style={{marginTop: 25, marginBottom: 40}}>
        <TextInput
          style={[styles.input, {paddingBottom: 5}]}
          label='Poznámka'
          mode='outlined'
          activeOutlineColor='#007aff'
          multiline={true}
          // placeholder='Dátum'
          defaultValue={store.getState().last.note}
          onChangeText={(text) => store.dispatch.last.updateLast('note', text)}
        />
        <TextInput
          style={styles.input}
          label='Trvanie výjazdu, min.'
          mode='outlined'
          activeOutlineColor='#007aff'
          // placeholder='Hlásenie'
          defaultValue={store.getState().last.duration}
          onChangeText={(text) => store.dispatch.last.updateLast('duration', text)}
        />
        <TextInput
          style={styles.input}
          label='Km, let. čas'
          mode='outlined'
          activeOutlineColor='#007aff'
          // placeholder='Výjazd'
          defaultValue={store.getState().last.km}
          onChangeText={(text) => store.dispatch.last.updateLast('km', text)}
        />
        <TextInput
          style={styles.input}
          label='NACA'
          mode='outlined'
          activeOutlineColor='#007aff'
          // placeholder='Výjazd'
          defaultValue={store.getState().last.naca}
          onChangeText={(text) => store.dispatch.last.updateLast('naca', text)}
        />
        <TextInput
          style={[styles.input, {paddingBottom: 5, marginBottom: 0}]}
          label='Výkony'
          mode='outlined'
          activeOutlineColor='#007aff'
          multiline={true}
          // placeholder='Príchod'
          defaultValue={store.getState().last.services}
          onChangeText={(text) => store.dispatch.last.updateLast('services', text)}
        />
      </View>
      <Button onPress={() => {
        downloadState('true');
        remove();
        navigation.navigate('HomeScreen');
      }}
      title="Uložiť"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 22,
    marginBottom: 20
  },
})