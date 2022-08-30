import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function ButtonStyled({ title, onPress, styleButton, styleText, }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styleButton}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  )
}
