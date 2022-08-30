import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Formik } from 'formik';
import store from '../rematch/store';
import { TextInput } from 'react-native-paper'
import DropdownList from '../components/patientScreen/DropdownList';
import { stylesGlobal } from '../styles/style'

export default function SessionScreen({ navigation }) {
  const form = useRef()
  const [endScreen, setEndScreen] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (form.current) {
        const  { values } = form.current
        store.dispatch.patient.setPatient(values)
        // console.log('state', store.getState().section)
      }
    })
    return unsubscribe;
  }, [navigation])
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} 
      style={stylesGlobal.container}
      onScroll={(e) => setEndScreen(isCloseToBottom(e.nativeEvent))}
    >
      <Formik 
        innerRef={form}
        initialValues={store.getState().patient}
        enableReinitialize
      >
        {(props) => (
          <Form props={props} endScreen={endScreen}/>
        )}
      </Formik>
    </ScrollView>
  );
}

const Form = ({ props, endScreen }) => (
  <View style={{flex: 1, marginVertical: 25}}>
    <TextInput
      style={[styles.input, {backgroundColor: '#ecf1f8'}]}
      label='Meno'
      mode='outlined'
      activeOutlineColor='#007aff'
      value={props.values.name}
      onChangeText={props.handleChange('name')}
    />
    <TextInput
      style={[styles.input, {backgroundColor: '#ecf1f8'}]}
      label='Preizvisko'
      mode='outlined'
      activeOutlineColor='#007aff'
      value={props.values.lastName}
      onChangeText={props.handleChange('lastName')}
    />
    <TextInput
      style={styles.input}
      label='Bydlisko'
      mode='outlined'
      activeOutlineColor='#007aff'
      value={props.values.house}
      onChangeText={props.handleChange('house')}
    />
    <TextInput
      style={styles.input}
      label='Miesto'
      mode='outlined'
      activeOutlineColor='#007aff'
      value={props.values.address}
      onChangeText={props.handleChange('address')}
    />
    <View style={ {flexDirection: 'row'}}>
      <TextInput
        mode='outlined'
        label='Rodné číslo'
        style={[styles.input, { width: '53%', marginRight: 30, backgroundColor: '#FFA8EC' }]}
        activeOutlineColor='#007aff'
        value={props.values.pin}
        onChangeText={props.handleChange('pin')}
      />
      <TextInput
        mode='outlined'
        label='Poisťovňa'
        style={[styles.input, { flex: 1, backgroundColor: '#FFA8EC' }]}
        activeOutlineColor='#007aff'
        value={props.values.insurance}
        onChangeText={props.handleChange('insurance')}
      />
    </View>
    <TextInput
      mode='outlined'
      label='Dôvod'
      style={[styles.input, ]}
      activeOutlineColor='#007aff'
      value={props.values.reason}
      onChangeText={props.handleChange('reason')}
    />
    <TextInput
      mode='outlined'
      label='Diagnóza'
      style={[styles.input, ]}
      activeOutlineColor='#007aff'
      value={props.values.diagnose}
      onChangeText={props.handleChange('diagnose')}
    />
    <View style={{flexDirection: 'row'}}>
      <TextInput
        mode='outlined'
        label='Č. op.(pasu)'
        style={[styles.input, { width: '60%', marginRight: 30 }]}
        activeOutlineColor='#007aff'
        value={props.values.passportNum}
        onChangeText={props.handleChange('passportNum')}
      />
      <DropdownList endScreen={endScreen} property='firstAid' onPress={store.dispatch.patient.updatePatient}/>
    </View>
    <TextInput
      mode='outlined'
      label='Anamneza  (OA, LA, AA, TO)'
      style={[styles.input, { marginBottom: 0 }]}
      activeOutlineColor='#007aff'
      value={props.values.anamnesis}
      onChangeText={props.handleChange('anamnesis')}
    />
  </View>
)

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => 
  652 <= layoutMeasurement.height + contentOffset.y && layoutMeasurement.height + contentOffset.y < contentSize.height - 6;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 22,
    marginBottom: 20
  },
});
