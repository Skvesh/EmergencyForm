import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import RadioButton from '../RadioButton';
import TextInputStyled from './TextInput';
import Title from '../Title'

export default function CheckBox({ section, title, subTitle, data, onPress, style, styleChilldren }) {
  const [showed, setShowed] = useState(false)
 
  return (
    <View style={style}>
      {!!subTitle ? 
        <TouchableOpacity 
          onPress={() => setShowed(!showed)} 
          style={[header(showed), { paddingTop: 10, paddingBottom: 5}]
        }>
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          {!!Array.isArray(subTitle) 
          ? <View style={{width: '100%', paddingLeft: 14, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>{subTitle[0]}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 63, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>{subTitle[1]}</Text>
                </View>
                <View style={{width: 63, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>{subTitle[2]}</Text>
                </View>
              </View>
            </View> 
          : <View >
            <Text style={{fontSize: 20}}>{subTitle}</Text>
          </View>
          }
        </TouchableOpacity>
      : <TouchableOpacity onPress={() => setShowed(!showed)} style={[header(showed), {height: 58}]}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
      }
      {!!showed ? data.map((item, index) => (
        item.checked.constructor.name === 'Object' && item.checked != null ?
          item.checked.oneSide ?
          // for radioButtons on one side
            <View 
              style={[styles.radioButton, 
                {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingRight: 0, paddingTop: 0, paddingBottom: 0}]} 
              key={Math.random().toString(12).substring(0)}
            >
              <Title title={item.title} style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}/>
              <RadioButton
                initial={item.checked.right}
                onPress={(state) => {onPress(section, item.title, state, 'right')}}
                style={{padding: 14}}
              />
              <RadioButton
                initial={item.checked.left}
                onPress={(state) => {onPress(section, item.title, state, 'left')}}
                style={{padding: 14, borderLeftWidth: 1, borderColor: 'rgba(0,0,0,0.54)'}}
              />
            </View>
          : typeof item.checked.left === 'string' ?
            // for textInput on both sides
            <View style={[styles.radioButton, {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 0}]} key={Math.random().toString(12).substring(0)}>
              <TextInputStyled
                initial={item.checked.left}
                onPress={(state) => {onPress(section, item.title, state, 'right')}}
                styleBox={{paddingVertical: 14, paddingHorizontal: 7}}
                styleInput={[{width: 49}, styleChilldren]}
              />
              <Title title={item.title} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
              <TextInputStyled
                initial={item.checked.right}
                onPress={(state) => {onPress(section, item.title, state, 'left')}}
                styleBox={{paddingVertical: 14, paddingHorizontal: 7}}
                styleInput={[{width: 49}, styleChilldren]}
              />
            </View> 
            // for radiobuttons on both sides
            : <View style={[styles.radioButton, {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 0}]} key={Math.random().toString(12).substring(0)}>
              <RadioButton
                initial={item.checked.left}
                onPress={(state) => {onPress(section, item.title, state, 'left')}}
                style={{padding: 14}}
              /> 
              <Title title={item.title} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
              <RadioButton 
                initial={item.checked.right}
                onPress={(state) => {onPress(section, item.title, state, 'right')}}
                style={{padding: 14}}
            /> 
          </View> 
        : item.addTitle ? 
        // for textInput with one radioButton
          <View style={[styles.radioButton, {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 0}]} key={Math.random().toString(12).substring(0)}>
             <TextInputStyled
                initial={item.title}
                onPress={(state) => { onPress(section, item.title, state)}}
                styleBox={{flex: 1, paddingVertical: 14, paddingLeft: 14}}
                styleInput={styleChilldren}
            />
            <RadioButton
                initial={item.checked.right}
                onPress={(state) => { onPress(section, item.title, state)}}
                style={{padding: 14}}
            /> 
          </View>
        // for radioButton on whole line
        : <RadioButton
          initial={item.checked}
          Title={() => Title({ title: item.title, subTitle: item.number})}
          key={Math.random().toString(12).substring(0)} 
          onPress={(state) => { onPress(section, item.title, state)}}
          style={styles.radioButton}
        />
      )) : null}
    </View>
  )
}

const header = (showed) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: 'rgba(0,0,0,0.54)',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: showed ? 0 : 4,
  borderBottomRightRadius: showed ? 0 : 4
})
const styles = StyleSheet.create({
  headerBox: {
    width: '100%',
    paddingBottom: 5,
    marginBottom: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.54)'
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1.5
  },
  text: {
    fontSize: 22,
  },
  radioButton: {
    height: 58,
    padding: 14,
    // justifyContent: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(0,0,0,0.54)',
  },
})
