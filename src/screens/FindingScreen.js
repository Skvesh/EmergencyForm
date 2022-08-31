import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, FlatList } from 'react-native'
import RadioButton from '../components/RadioButton'
import { Formik } from 'formik'
import store from '../rematch/store'
import { TextInput } from 'react-native-paper'
import CheckBox from '../components/findingScreen/CheckBox'
import { stylesGlobal } from '../styles/style';
import { dataFinding as DATA  } from '../data';

export default function FindingScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <CheckBox
      title={item.title}
      subTitle={item.subTitle}
      data={store.getState().finding[item.data]}
      // getData={() => store.getState().finding.openingEyes}
      onPress={(section, title, state, side) => {store.dispatch.finding.updateFinding(item.data, [title, state, side])}}
      style={item.style}
      styleChilldren={item.styleChilldren}
    />
  );
  return (
    <View style={stylesGlobal.container}>
      <View style={styles.table}>
        <FlatList
          showsVerticalScrollIndicator={false} 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
{  table: {
  // flex: 1,
  marginVertical: 31,
  borderWidth: 1,
  borderRadius: 4,
  paddingTop: 20,
  paddingLeft: 15,
  paddingRight: 15,
  paddingBottom: 15,
},
  checkBox: {
    // width: '90%',
    // backgroundColor: '#fff',
    marginBottom: 20
  },
  radioButtons: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textButton: {
    fontSize: 25,
    fontWeight: '500'
  },
});
