import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store';
import ButtonStyled from '../components/tableScreen/ButtonStyled';
import Table from '../components/tableScreen/Table'
import { timeData, upvData, timeTable, upvTable } from '../data';

export default function TableScreen({ navigation })  {
  // const timeData = [
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
  // const upvData = [
  //   { title: 'UPV', style: {backgroundColor: '#a5ddfa'}, engTitle: 'upv'},
  //   { title: 'Masáž', subTitle: '', style: {backgroundColor: '#f7b6d7'}, engTitle: 'massage' },
  //   { title: 'Defibrilácia', subTitle: '',  style: {backgroundColor: '#f7b6d7'}, engTitle: 'defibrillation' },
  //   { title: 'Pace-maker', subTitle: 'Ⓟ', style: {backgroundColor: '#f7b6d7'}, engTitle: 'paceMaker' },
  //   { title: 'Transport', subTitle: 'T', style: {marginBottom: 15 }, engTitle: 'transport' },
  // ]
  // const timeTable = {
  //   time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: false }),
  //   syst: '',
  //   diast: '',
  //   sf: '',
  //   df: '',
  //   do: '',
  //   saturacia: '',
  //   glyk: '',
  //   tt: '',
  //   gcs: '',
  //   ts: '',
  //   add: {key: '', value: ''},
  //   id: ''
  // }
  // const upvTable = {
  //   upv: '',
  //   massage: '',
  //   diast: '',
  //   defibrillation: '',
  //   paceMaker: '',
  //   transport: '',
  // }

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