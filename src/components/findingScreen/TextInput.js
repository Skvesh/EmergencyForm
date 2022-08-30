import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function TextInputStyled({ onPress, styleBox, styleInput, initial }) {
  return (
    <View style={styleBox}>
      <TextInput style={[styles.input, styleInput]} defaultValue={initial} onChangeText={(text) => onPress(text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    // width: 49,
    height: 35,
    paddingHorizontal: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.54)',
    backgroundColor: '#fff',
    fontSize: 20
  },
})