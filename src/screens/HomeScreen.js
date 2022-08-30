import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  // const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Výtvoriť' onPress={() => navigation.push('MainTab')}/>
      {/* <TextInput 
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={{height: 100}}
      />  */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

