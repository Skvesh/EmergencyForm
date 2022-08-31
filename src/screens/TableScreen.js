import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store';
import ButtonStyled from '../components/tableScreen/ButtonStyled';
import Table from '../components/tableScreen/Table'
import { timeData, upvData, timeTable, upvTable } from '../data';

export default function TableScreen({ navigation })  {
  return (
    <ScrollView style={stylesGlobal.container}>
      <Table storeTitle='time' DATA={timeData} initialState={timeTable} titleItem={['time', 'čas']} style={styles.table} navigation/>
      <Table storeTitle='upv' DATA={upvData} initialState={upvTable} titleItem={['upv', 'upv']} style={[styles.table, {marginTop: 0}]} navigation/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  table: {
    // flex: 1,
    marginVertical: 31,
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
  }, 
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
  buttoText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1.5,
    textTransform: 'uppercase'
  }
})