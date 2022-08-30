import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper';

export default function RadioButton({ initial = false, Title, onPress, style }) {
  const [state, setState] = useState(initial);
  const firstUpdate = useRef(false);

  useEffect(() => {
    if (firstUpdate.current) {
      onPress(state)
      // console.log('state1',state);
    } else {
      firstUpdate.current = true
    }
  }, [state])
  // const show = state
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={() => {
        setState(current => !current)
      }}>
        {/* { title ? <Text style={[styleText, { marginRight: 10 }]}>{title}</Text> : null} */}
        { Title ? 
          <Title /> : null
        }
        <View style={styles.square}>
          {/* { console.log('square', state) } */}
          { state ? <View style={styles.smallSquare}></View> : null }
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    // width: 85,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  square: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.54)',
    backgroundColor: '#fff'
  },
  smallSquare: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#007aff',
    // backgroundColor: '#000'
  }
})