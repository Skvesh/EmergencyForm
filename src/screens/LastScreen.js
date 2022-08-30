import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import { TextInput } from 'react-native-paper'

export default function LastScreen() {
  return (
    <ScrollView style={stylesGlobal.container}>
      <View style={{marginVertical: 25}}>
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