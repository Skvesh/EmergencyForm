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
  // const form = useRef()
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //     if (form.current) {
  //       const  { values } = form.current
  //       store.dispatch.session.setSession(values)
  //       console.log('state', store.getState())
  //     }
  //   })
  //   return unsubscribe;
  // }, [navigation])

  // const DATA = [
  //   {
  //    title: 'Otváranie očí',
  //    data: 'openingEyes',
  //    style: [styles.checkBox, { backgroundColor: '#d5dce1'}],
  //    key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Verb. kontakt',
  //     data: 'verbalContact',
  //     style: [styles.checkBox, {backgroundColor: '#d5dce1'}],
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Motorika',
  //     data: 'motorSkills',
  //     style: [styles.checkBox, {backgroundColor: '#d5dce1'}],
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Očné reflexy',
  //     data: 'eyeReflexes',
  //     style: styles.checkBox,
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Bolesť',
  //     data: 'pain',
  //     style: styles.checkBox,
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Brucho',
  //     data: 'belly',
  //     style: styles.checkBox,
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Dýchacie cesty',
  //     data: 'airways',
  //     style: [styles.checkBox, {backgroundColor: '#a5ddfa'}],
  //     styleChilldren: {backgroundColor: '#a5ddfa'}, 
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Dýchanie',
  //     data: 'breathing',
  //     style: [styles.checkBox, {backgroundColor: '#a5ddfa'}],
  //     styleChilldren: {backgroundColor: '#a5ddfa'}, 
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Auskultačný nález',
  //     data: 'auscultationFinding',
  //     style: [styles.checkBox, {backgroundColor: '#a5ddfa'}],
  //     styleChilldren: {backgroundColor: '#a5ddfa'}, 
  //     key: Math.random().toString(12).substring(0)
  //   }, 
  //   {
  //     title: 'Neurologický	 nález',
  //     data: 'neurologicalFinding',
  //     style: [styles.checkBox, {backgroundColor: '#d5dde1'}],
  //     styleChilldren: {backgroundColor: '#d5dde1'}, 
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Cirkulácia',
  //     subTitle: ['Pulz', 'cent.', 'perit.'],
  //     data: 'circulation',
  //     style: [styles.checkBox, {backgroundColor: '#f7b6d7'}],
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Auskultačný nález',
  //     subTitle: 'Akcia srdca',
  //     data: 'auscultationFindingPink',
  //     style: [styles.checkBox, {backgroundColor: '#f7b6d7'}],
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Koža',
  //     data: 'leather',
  //     style: [styles.checkBox, {backgroundColor: '#f7b6d7'}],
  //     styleChilldren: {backgroundColor: '#f7b6d7'}, 
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'Auskultačný nález',
  //     data: 'auscultationFinding',
  //     style: [styles.checkBox, {backgroundColor: '#a5ddfa'}],
  //     styleChilldren: {backgroundColor: '#a5ddfa'}, 
  //     key: Math.random().toString(12).substring(0)
  //   },
  //   {
  //     title: 'auscultationFinding',
  //     data: 'eyeReflexes',
  //     style: [styles.checkBox, {marginBottom: 31}],
  //     key: Math.random().toString(12).substring(0)
  //   },
  // ]
  const renderItem = ({ item }) => (
    <CheckBox
      title={item.title}
      subTitle={item.subTitle}
      data={store.getState().finding[item.data]}
      // getData={() => store.getState().finding.openingEyes}
      onPress={(title, state, side) => {store.dispatch.finding.updateFinding(item.data, [title, state, side])}}
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
        {/* <CheckBox
          title="Otváranie očí"
          data={store.getState().finding.openingEyes}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('openingEyes', title, state); store.dispatch.finding.updateFinding('openingEyes', [title, state])}}
          style={[styles.checkBox, {backgroundColor: '#d5dce1'}]}
        />
        <CheckBox
          title="Verb. kontakt"
          data={store.getState().finding.verbalContact}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('verbalContact', title, state); store.dispatch.finding.updateFinding('verbalContact', [title, state])}}
          style={[styles.checkBox, {backgroundColor: '#d5dce1'}]}
        />
        <CheckBox
          title="Motorika"
          data={store.getState().finding.motorSkills}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('motorSkills', title, state); store.dispatch.finding.updateFinding('motorSkills', [title, state])}}
          style={[styles.checkBox, {backgroundColor: '#d5dce1'}]}
        />
        <CheckBox
          title="Očné reflexy"
          data={store.getState().finding.eyeReflexes}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state, side) => {console.log('eyeReflexes', title, state); store.dispatch.finding.updateFinding('eyeReflexes', [title, state, side])}}
          style={styles.checkBox}
        />
        <CheckBox
          title="Bolesť"
          data={store.getState().finding.pain}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('pain', title, state); store.dispatch.finding.updateFinding('pain', [title, state])}}
          style={styles.checkBox}
        />
        <CheckBox
          title="Brucho"
          data={store.getState().finding.belly}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('belly', title, state); store.dispatch.finding.updateFinding('belly', [title, state])}}
          style={styles.checkBox}
        />
        <CheckBox
          title="Dýchacie cesty"
          data={store.getState().finding. airways}
          // getData={() => store.getState().finding.openingEyes}
          onPress={(title, state) => {console.log('airways', title, state); store.dispatch.finding.updateFinding('airways', [title, state])}}
          style={styles.checkBox}
        /> */}
      </View>
      {/* <Formik 
        innerRef={form}
        initialValues={store.getState().session}
        enableReinitialize
      >
        {(props) => (
          <View style={{marginVertical: 25}}>
            <TextInput
              style={styles.input}
              label='Dátum'
              mode='outlined'
              activeOutlineColor='#007aff'
              // placeholder='Dátum'
              value={props.values.date}
              onChangeText={props.handleChange('date')}
            />
          </View>
        )}
      </Formik> */}
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
