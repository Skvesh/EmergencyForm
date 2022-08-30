import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ButtonStyled from '../tableScreen/ButtonStyled'

export default function FlatListStyled({DATA, onPress, onLongPress, text, editable, onSubmit, onCancel, onSave}) {
  const Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => onPress(item.id)} onLongPress={() => onLongPress(item)} style={[styles.item, { marginLeft: index === 0 ? 5 : 10, marginRight: index === DATA.length - 1 ? 5 : 10}]}>
      <Text numberOfLines={1} style={{color: 'white', fontSize: 25, fontWeight: '700'}}>{item[text]}</Text>
    </TouchableOpacity>
  )

  return (
    <>
      { editable 
      ? <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <ButtonStyled title='Zrušiť' onPress={onCancel} styleButton={[styles.button, {width: '40%', marginRight: 20}]}
          styleText={{fontSize: 25, fontWeight: '600', color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase'}}
        />
        <ButtonStyled title='Uložiť' onPress={onSave} styleButton={[styles.button, {width: '40%'}]}
          styleText={{fontSize: 25, fontWeight: '600', color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase'}}
        />
      </View>
      : <ButtonStyled title='Pridať' onPress={onSubmit} styleButton={styles.button}
        styleText={styles.buttonText}
      />}
      <View style={{width: '90%', marginBottom: 15, borderBottomWidth: 1, alignSelf: 'center'}}></View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        initialNumToRender={3}
        data={DATA}
        renderItem={({item, index}) => <Item item={item} index={index} onPr/>}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    maxWidth: 150,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    borderRadius: 50,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 25,
    backgroundColor: '#007aff',
    color: '#fff',
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1.5,
    textTransform: 'uppercase'
  }
})