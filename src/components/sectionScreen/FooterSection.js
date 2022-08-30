import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import store from '../../rematch/store';
import FlatListStyled from '../sessionScreen/FlatListStyled';
import Title from '../Title';

export default function FooterSection({ style, title, storeTitle, DATA, initialState, titleItem, navigation }) {

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({
    error: null,
    // [titleItem[0]]: null,
  })
  const [editable, setEditable] = useState(false);
  const sections = store.getState().section[storeTitle]
  const [refresh, setRefresh] = useState(false);
  const onChange = (text, title) => {
    setState((state) => ({...state, [title]: text }))
  }
  const validate = (callback) => {
    if (Array.isArray(titleItem[1])) {
      if(titleItem[1].some((item) => state[item].trim() === '')) {
        setErrors({ error: `Vyžaduje sa zapisať ${titleItem[0]}` })
      } else {
        setErrors({ error: null })
        callback()
      }
    } else if (state[titleItem[1]].trim() === '') {
      setErrors({ error: `Vyžaduje sa zapisať ${titleItem[0]}` })
    } else {
      setErrors({ error: null })
      callback()
    }
  }
  const onSubmit = () => {
    validate(() =>
      store.dispatch.section.setArraySection({...state, id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString()}, storeTitle)
    )
    setState((state) => ({...state, id: ''}))
  }
  const onCancel = () => {
    setEditable(!editable)
    setState((state) => ({...state, id: ''}))
  }
  const onSave = () => {
    validate(() => store.dispatch.section.editArraySection(state, storeTitle))
    setState((state) => ({...state, id: ''}))
    setEditable(!editable)
  }
  const onPress = id => {
    // console.log(state);
    if (state.id === id || state.id === '') {
      setEditable(!editable)
    }
    const edit = sections.reduce((object, item) => item.id === id ? item : object, {})
    setState(edit)
    // console.log(edit);
  }
  const onLongPress = item => {
    store.dispatch.section.removeArraySection(item, storeTitle)
    setRefresh(!refresh)
    // console.log('LONGPRESS', sections);
  }
  return (
    <View style={[styles.table, {marginTop: 0}]}>
      <Title title={title} style={[styles.title, {marginBottom: 20}]} styleTitle={{fontSize: 25, fontWeight: '600'}}/>
      <View style={{marginBottom: errors.error ? 10 : 20}}>
        {storeTitle === 'therapy' ?
          <View style={{flexDirection: 'row'}}>
            {/* <TextInput
              mode='outlined'
              label='Názov'
              activeOutlineColor='#007aff'
              outlineColor="#000"
              value={state.name}
              onChangeText={(text) => onChange(text, 'name')}
              style={[styles.input, { flex:2, marginRight: 20 }]}
            /> */}
            <TextInput
              mode='outlined'
              label='Opis'
              activeOutlineColor='#007aff'
              outlineColor="#000"
              value={state.description}
              onChangeText={(text) => onChange(text, 'description')}
              style={[styles.input, { flex: 2, marginRight: 20 }]}
            />
            <TextInput
              mode='outlined'
              label='Čas'
              style={[styles.input, { flex: 1 }]}
              activeOutlineColor='#007aff'
              outlineColor="#000"
              value={state.time}
              onChangeText={(text) => onChange(text, 'time')}
            />
          </View>
        : <TextInput
            mode='outlined'
            label='Názov'
            style={styles.input}
            activeOutlineColor='#007aff'
            outlineColor="#000"
            value={state.name}
            onChangeText={(text) => onChange(text, 'name')}
          />
        }
        {!!errors.error && (
          <Text style={styles.error}>{errors.error}</Text>
        )}
      </View>
      {/* <TextInput
        multiline
        mode='outlined'
        label='Opis'
        style={[styles.input, {paddingVertical: 15, marginBottom: 25}]}
        activeOutlineColor='#007aff'
        outlineColor="#000"
        value={state.description}
        onChangeText={(text) => onChange(text, 'description')}
      /> */}
      <FlatListStyled DATA={sections} onPress={onPress} 
      onLongPress={onLongPress} text='name' onSubmit={onSubmit} editable={editable} onCancel={onCancel} onSave={onSave}/>
    </View>
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
  error: {
    paddingTop: 10,
    alignSelf: 'center',
    color: "red",
    fontSize: 15
  },
})