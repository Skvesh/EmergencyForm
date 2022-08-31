import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import RadioButton from '../components/RadioButton'
import { Formik } from 'formik'
import store from '../rematch/store'
import { TextInput } from 'react-native-paper'
import { stylesGlobal } from '../styles/style'
import Title from '../components/Title'

export default function SessionScreen({ navigation }) {
  // const form = useRef()
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // if (form.current) {
      //   const  { values } = form.current
      //   store.dispatch.session.setSession(values)
      //   console.log('state', store.getState())
      // }
    })
    return unsubscribe;
  }, [navigation])
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={stylesGlobal.container}>
        <Form store={store}/>
    </ScrollView>
  );
}

const Form = ({ store }) => (
  <View style={{marginVertical: 25}}>
    <TextInput
      style={styles.input}
      label='Dátum'
      mode='outlined'
      activeOutlineColor='#007aff'
      // placeholder='Dátum'
      defaultValue={store.getState().session.date}
      onChangeText={(text) => store.dispatch.session.updateSession('date', text)}
    />
    <TextInput
      style={styles.input}
      label='Hlásenie'
      mode='outlined'
      activeOutlineColor='#007aff'
      // placeholder='Hlásenie'
      defaultValue={store.getState().session.message}
      onChangeText={(text) => store.dispatch.session.updateSession('message', text)}
    />
    <TextInput
      style={styles.input}
      label='Výjazd'
      mode='outlined'
      activeOutlineColor='#007aff'
      // placeholder='Výjazd'
      defaultValue={store.getState().session.exit}
      onChangeText={(text) => store.dispatch.session.updateSession('exit', text)}
    />
    <TextInput
      style={styles.input}
      label='Príchod'
      mode='outlined'
      activeOutlineColor='#007aff'
      // placeholder='Príchod'
      defaultValue={store.getState().session.start}
      onChangeText={(text) => store.dispatch.session.updateSession('start', text)}
    />
    <TextInput
      mode='outlined'
      label='Odovzdanie'
      style={styles.input}
      activeOutlineColor='#007aff'
      // placeholder='Odovzdanie'
      defaultValue={store.getState().session.transfer}
      onChangeText={(text) => store.dispatch.session.updateSession('transfer', text)}
    />
    <TextInput
      mode='outlined'
      label='Ukončenie'
      style={[styles.input, { marginBottom: 40 }]}
      activeOutlineColor='#007aff'
      // placeholder='Ukončenie'
      defaultValue={store.getState().session.end}
      onChangeText={(text) => store.dispatch.session.updateSession('end', text)}
    />
    <View style={styles.radioButtons}>
      <RadioButton 
        onPress={
          // props.setFieldValue('rlp', !props.values.rlp)
          (state) => store.dispatch.session.updateSession('rlp', state)
        } 
        initial={store.getState().session.rlp}
        // property='rlp' styleText={styles.textButton} 
        Title={() => Title({title: 'RLP', style: styles.textButton, styleTitle: {fontSize: 25,fontWeight: '500'}})}
        // title='RLP'
      />
      <RadioButton 
        onPress={(state) => store.dispatch.session.updateSession('rzp', state)} 
        initial={store.getState().session.rzp}
        Title={() => Title({title: 'RZP', style: styles.textButton, styleTitle: {fontSize: 25,fontWeight: '500'}})}/>
      <RadioButton 
        onPress={(state) => store.dispatch.session.updateSession('vzzs', state)}  
        initial={store.getState().session.vzzs}
        Title={() => Title({title: 'VZZS', style: styles.textButton, styleTitle: {fontSize: 25,fontWeight: '500'}})}/>
    </View>
  </View>
)
// const Title = ({ title }) => (<Text style={styles.textButton}>{title}</Text>)

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 22,
    marginBottom: 20
  },
  radioButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textButton: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 10,
    fontSize: 25,
    fontWeight: '500'
  },
});
