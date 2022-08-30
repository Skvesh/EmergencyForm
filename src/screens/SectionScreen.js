import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import CheckBox from '../components/findingScreen/CheckBox'
import RadioButton from '../components/RadioButton'
import Title from '../components/Title'
import { TextInput } from 'react-native-paper'
import FlatListStyled from '../components/sessionScreen/FlatListStyled'
import FooterSection from '../components/sectionScreen/FooterSection'

export default function SectionScreen({ navigation }) {
  const dataTherapy = {
    name: '',
    time: '',
    description: '',
    id: '',
  }
  const dataDiagnosis = {
    name: '',
    description: '',
  }
  const [state, setState] = useState({
    name: '',
    time: '',
    description: '',
    id: '',
  })
  // const [editable, setEditable] = useState(false)
  // const therapy = store.getState().section.therapy
  // const validate = (callback) => {
  //   if (state[titleItem[0]].trim() === '') {
  //     setErros({ [titleItem[0]]: `Vyžaduje sa zapisať ${titleItem[1]}` })
  //   } else {
  //     setErros({ [titleItem[0]]: null })
  //     callback()
  //   }
  // }
  // const onSubmit = () => {
  //   // validate(() =>
  //     store.dispatch.section.setArraySection({...state, id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString()}, 'therapy')
  //   // )
  //   setState((state) => ({...state, id: ''}))
  // }
  // const onCancel = () => {
  //   setEditable(!editable)
  //   setState((state) => ({...state, id: ''}))
  // }
  // const onSave = () => {
  //   // validate(() => store.dispatch.table.editTable(state, storeTitle))
  //   setState((state) => ({...state, id: ''}))
  //   setEditable(!editable)
  // }
  // const onPress = id => {
  //   console.log(state);
  //   if (state.id === id || state.id === '') {
  //     setEditable(!editable)
  //   }
  //   const edit = therapy.reduce((object, item) => item.id === id ? item : object, {})
  //   setState(edit)
  //   console.log(edit);
  // }
  // const onLongPress = item => {
  //   store.dispatch.table.removeArraySection(item, 'therapy')
  //   setRefresh(!refresh)
  //   console.log('LONGPRESS', therapy);
  // }
  
  return (
    <ScrollView style={stylesGlobal.container}>
      <View style={styles.table}>
        <RadioButton 
          Title={() => Title({title: 'Výkony', styleTitle: {fontSize: 25, fontWeight: '600'}})}
          initial={store.getState().section.services.sine}
          onPress={state => store.dispatch.section.updateSection('services', ['sine', state])}
          style={styles.title}
        />
        <CheckBox
          section='services'
          title='Dýchacie cesty'
          data={store.getState().section.services.airways}
          onPress={(section, title, state, side) => {store.dispatch.section.updateSection(section, ['airways', title, state, side])}}
          style={[styles.checkBox, {backgroundColor: '#a5ddfa'}]}
        />
        <CheckBox
          section='services'
          title='Dýchanie'
          data={store.getState().section.services.breathing}
          onPress={(section, title, state, side) => {store.dispatch.section.updateSection(section, ['breathing', title, state, side])}}
          style={[styles.checkBox, {backgroundColor: '#a5ddfa'}]}
        />
        <CheckBox
          section='services'
          title='Cirkulácia'
          data={store.getState().section.services.circulation}
          onPress={(section, title, state, side) => {store.dispatch.section.updateSection(section, ['circulation', title, state, side])}}
          style={[styles.checkBox, {marginBottom: 0, backgroundColor: '#f7b6d7'}]}
        />
      </View>
      <View style={[styles.table, {marginTop: 0}]}>
        <RadioButton 
            Title={() => Title({title: 'Ostarné výkony', styleTitle: {fontSize: 25, fontWeight: '600'}})}
            initial={store.getState().section.otherServices.sine}
            onPress={state => store.dispatch.section.updateSection('otherServices', ['sine', state])}
            style={styles.title}
        />
        <CheckBox
            section='otherServices'
            title='Zobraziť'
            data={store.getState().section.otherServices.otherServices}
            onPress={(section, title, state, side) => {store.dispatch.section.updateSection(section, ['otherServices', title, state, side])}}
            style={[styles.checkBox, {marginBottom: 0}]}
        />
      </View>
      <FooterSection storeTitle='therapy' title='Terapia' initialState={dataTherapy} titleItem={['čas', 'time']} style={null}/>
      <View style={[styles.table, {marginTop: 0}]}>
        <Title title={'Diagnóza'} style={[styles.title, {marginBottom: 20}]} styleTitle={{fontSize: 25, fontWeight: '600'}}/>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TextInput 
            mode='outlined'
            label='Dg1'
            activeOutlineColor='#007aff'
            outlineColor="#000"
            defaultValue={store.getState().section.diagnosis.title}
            onChangeText={(text) => store.dispatch.section.setSection('title', text)}
            style={[styles.input, { flex: 1, marginRight: 20 }]}
          />
          <TextInput 
            mode='outlined'
            label='Dg2'
            activeOutlineColor='#007aff'
            outlineColor="#000"
            defaultValue={store.getState().section.diagnosis.subTitle}
            onChangeText={(text) => store.dispatch.section.setSection('subTitle', text)}
            style={[styles.input, { flex: 1 }]}
          />
        </View>
        <TextInput 
            mode='outlined'
            label='Opis'
            activeOutlineColor='#007aff'
            outlineColor="#000"
            defaultValue={store.getState().section.diagnosis.description}
            onChangeText={(text) => store.dispatch.section.setSection('description', text)}
            style={styles.input}
          />
      </View>
      {/* <FooterSection storeTitle='diagnosis' title='Diagnóza' initialState={dataDiagnosis} titleItem={['názov', 'name']} style={null}/> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  table: {
    // flex: 1,
    marginVertical: 31,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  checkBox: {
    // width: '90%',
    // backgroundColor: '#fff',
    marginBottom: 20
  },
  title: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 25, 
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 22,
  },
})