import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Title({ title, subTitle, style=styles.container, styleTitle={fontSize: 22} }) {
  return (
    <View style={[style]}>
      <Text style={styleTitle}>{title}</Text>
      {
        subTitle ? 
          <Text style={{fontSize: 22}}>{subTitle}</Text> 
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
})