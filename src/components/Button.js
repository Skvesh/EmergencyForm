import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import store from '../rematch/store';

export default function Button({ onPress, title}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase'
  }
})