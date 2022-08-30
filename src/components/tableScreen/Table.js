import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import store from '../../rematch/store';
import ButtonStyled from './ButtonStyled';
import FlatListStyled from '../sessionScreen/FlatListStyled';

export default function Table({ style, storeTitle, DATA, initialState, titleItem, navigation })  {
  // const DATA = [
  //   { title: 'Čas', engTitle: 'time'},
  //   { title: 'Systl. TK', subTitle: 'Torr', style: {backgroundColor: '#f7b6d7'}, engTitle: 'syst' },
  //   { title: 'Diast. TK', subTitle: 'Torr',  style: {backgroundColor: '#f7b6d7'}, engTitle: 'diast' },
  //   { title: 'SF (HR)', subTitle: 'min', style: {backgroundColor: '#f7b6d7'}, engTitle: 'sf' },
  //   { title: 'DF (RR)', subTitle: 'min', style: {backgroundColor: '#a5ddfa'}, engTitle: 'df' },
  //   { title: 'DO (TV)', subTitle: 'ml', style: {backgroundColor: '#a5ddfa'}, engTitle: 'do' },
  //   { title: 'O saturacia', subTitle: '%', style: {backgroundColor: '#a5ddfa'}, engTitle: 'saturacia' },
  //   { title: 'Glyk.', subTitle: 'mmo|/|', engTitle: 'glyk' },
  //   { title: 'TT', subTitle: 'C', engTitle: 'tt' },
  //   { title: 'GCS', style: {backgroundColor: '#d5dde1'}, engTitle: 'gcs' },
  //   { title: 'TS', subTitle: '', engTitle: 'ts' },
  //   { title: '', style: {marginBottom: 15}, engTitle: 'add' },
  // ]
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({
    [titleItem[0]]: null,
  })
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    // console.log('STATE', state);
    // console.log('STORE', store.getState().table);
  }, [state])
  const tables = store.getState().table[storeTitle]
  const [refresh, setRefresh] = useState(false);
  const onChange = (text, engTitle, key) => {
    if (engTitle === 'add') {
      if (key) {
        setState((state) => ({...state, [engTitle]: { ...state.add, key: text } }))
      } else {
        setState((state) => ({...state, [engTitle]: { ...state.add, value: text } }))
      }
    } else {
      setState((state) => ({...state, [engTitle]: text }))
    }
  }
  const validate = (callback) => {
    if (state[titleItem[0]].trim() === '') {
      setErrors({ [titleItem[0]]: `Vyžaduje sa zapisať ${titleItem[1]}` })
    } else {
      setErrors({ [titleItem[0]]: null })
      callback()
    }
  }
  const onSubmit = () => {
    validate(() =>
      store.dispatch.table.setTable({...state, id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString()}, storeTitle)
    )
    setState((state) => ({...state, id: ''}))
  }
  const onCancel = () => {
    setEditable(!editable)
    setState((state) => ({...state, id: ''}))
  }
  const onSave = () => {
    validate(() => store.dispatch.table.editTable(state, storeTitle))
    setState((state) => ({...state, id: ''}))
    setEditable(!editable)
  }
  const onPress = id => {
    // console.log(state);
    if (state.id === id || state.id === '') {
      setEditable(!editable)
    }
    const edit = tables.reduce((object, item) => item.id === id ? item : object, {})
    setState(edit)
    // console.log(edit);
  }
  const onLongPress = item => {
    store.dispatch.table.removeTable(item, storeTitle)
    setRefresh(!refresh)
    // console.log('LONGPRESS', tables);
  }
  
  return (
    <View style={style}>
      {DATA.map((item, index) => (
        <Row item={item} state={state} errors={errors} onChange={onChange} key={index + 1}/>
      ))}
      <FlatListStyled DATA={tables} onPress={onPress} 
        onLongPress={onLongPress} text={titleItem[0]} onSubmit={onSubmit} editable={editable} onCancel={onCancel} onSave={onSave}/>
    </View>
  )
}

const Row = ({ item, state, errors, onChange } ) => (
  <View style={{ marginBottom: 10 }}>
    <View style={[{flexDirection: 'row',}, item.style]}>
      {(item.engTitle === 'add')
        ? <TextInput value={state[item.engTitle].key} onChangeText={(text) => onChange(text, item.engTitle, 'key')} style={[styles.title, {fontSize: 20}]}/>
        : <View style={styles.title}>
            <Text style={{marginRight: 5, fontSize: 20}}>{item.title}</Text>
            {!!item.subTitle &&
              <Text style={{fontSize: 20}}>{item.subTitle}</Text>
            }
        </View>
      }
      {(item.engTitle === 'add') 
        ? <TextInput value={state[item.engTitle].value} onChangeText={(text) => onChange(text, item.engTitle)} style={styles.input}/>
        : <TextInput value={state[item.engTitle]} onChangeText={(text) => onChange(text, item.engTitle)} style={styles.input}/>
      }
    </View>
    {!!errors[item.engTitle] && (
      <Text style={styles.error}>{errors[item.engTitle]}</Text>
    )}
  </View>
)

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginRight: 20,
    borderBottomWidth: 1
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 22,
  },
  error: {
    paddingTop: 5,
    alignSelf: 'center',
    color: "red",
    fontSize: 15
  },
})