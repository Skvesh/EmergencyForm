import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import Title from '../components/Title'
import * as Paper from 'react-native-paper'
import RadioButton from '../components/RadioButton'

export default function HandOverScreen() {
  return (
    <ScrollView style={stylesGlobal.container}>
      <View style={styles.table}>
        <Title title='Posádka' style={[styles.title, {marginBottom: 20}]} styleTitle={{fontSize: 25, fontWeight: '600', color: '#000'}}/>
        <Paper.TextInput
          mode='outlined'
          label='Plné meno'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
          defaultValue={store.getState().handover.crew.first}
          onChangeText={(text) => store.dispatch.handover.setHandover('crew', ['first', text])}
        />
        <Paper.TextInput
          mode='outlined'
          label='Plné meno'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          defaultValue={store.getState().handover.crew.second}
          onChangeText={(text) => store.dispatch.handover.setHandover('crew', ['second', text])}
          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
        />
        <Paper.TextInput
          mode='outlined'
          label='Plné meno'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          defaultValue={store.getState().handover.crew.third}
          onChangeText={(text) => store.dispatch.handover.setHandover('crew', ['third', text])}
          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
        />
        <Paper.TextInput
          mode='outlined'
          label='Plné meno'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          defaultValue={store.getState().handover.crew.fourth}
          onChangeText={(text) => store.dispatch.handover.setHandover('crew', ['fourth', text])}
          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
        />
        <View style={{width: '90%', marginBottom: 18, borderBottomWidth: 1, alignSelf: 'center'}}></View>
        <Paper.TextInput
            mode='outlined'
            label='Odovzdal'
            style={[styles.input, {marginBottom: 25}]}
            activeOutlineColor='#007aff'
            defaultValue={store.getState().handover.handed.name}
            onChangeText={(text) => store.dispatch.handover.setHandover('handed', ['name', text])}
            // outlineColor="#000"
            // value={state.description}
            // onChangeText={(text) => onChange(text, 'description')}
        />
        <Paper.TextInput
          mode='outlined'
          label='Odovzdal kde'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          defaultValue={store.getState().handover.handedWhere}
          onChangeText={(text) => store.dispatch.handover.setHandover('handedWhere', text)}
          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
        />
        <Paper.TextInput
          mode='outlined'
          label='Prevzal'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          defaultValue={store.getState().handover.taken.name}
          onChangeText={(text) => store.dispatch.handover.setHandover('taken', ['name', text])}

          // outlineColor="#000"
          // value={state.description}
          // onChangeText={(text) => onChange(text, 'description')}
        />
        <View style={{width: '90%', marginBottom: 18, borderBottomWidth: 1, alignSelf: 'center'}}></View>
        <View style={[styles.table, {marginTop: 7, marginBottom: 0}]}>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('intervention', state)}
          initial={store.getState().handover.intervention}
          Title={() => Title({title: 'Zásah prim.', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('sekund', state)}
          initial={store.getState().handover.sekund}
          Title={() => Title({title: 'sekund.', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          onPress={(state) => store.dispatch.handover.updateHandover('nesup', state)}
          initial={store.getState().handover.nesup}
          Title={() => Title({title: 'neusp.', style: styles.styleButton, styleTitle: styles.textButton})}/>
        </View>
        <View style={[styles.table, { marginBottom: 0}]}>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('indicated', state)}
          initial={store.getState().handover.indicated}
          Title={() => Title({title: 'Indikovaný', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('notIndicated', state)}
          initial={store.getState().handover.notIndicated}
          Title={() => Title({title: 'neindik.', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          onPress={(state) => store.dispatch.handover.updateHandover('abused', state)} 
          initial={store.getState().handover.abused}
          Title={() => Title({title: 'zneužitie', style: styles.styleButton, styleTitle: styles.textButton})}/>
        </View>
        <View style={[styles.table, { marginBottom: 0}]}>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('conditionImproved', state)} 
          initial={store.getState().handover.conditionImproved}
          Title={() => Title({title: 'Stav zlepšený', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          style={{marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('unchanged', state)} 
          initial={store.getState().handover.unchanged}
          Title={() => Title({title: 'zmen.', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton 
          onPress={(state) => store.dispatch.handover.updateHandover('aggravated', state)} 
          initial={store.getState().handover.aggravated}
          Title={() => Title({title: 'zhoršený', style: styles.styleButton, styleTitle: styles.textButton})}/>
        </View>
        <View style={[styles.table, { marginBottom: 25}]}>
          <RadioButton
          style={{flex: 1, marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('treated', state)} 
          initial={store.getState().handover.treated}
          Title={() => Title({title: 'Pacient ošetrený doma, poučený  ', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          style={{flex: 1, marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('refusedTreatment', state)} 
          initial={store.getState().handover.refusedTreatment}
          Title={() => Title({title: 'odmietol ošetrenie', style: styles.styleButton, styleTitle: styles.textButton})}/>
          <RadioButton
          // style={{flex: 1, marginBottom: 20}}
          onPress={(state) => store.dispatch.handover.updateHandover('refusedTransportation', state)} 
          initial={store.getState().refusedTransportation}
          Title={() => Title({title: 'odmietol prevoz', style: styles.styleButton, styleTitle: styles.textButton})}/>
        </View>
        <View style={{width: '90%', marginBottom: 18, borderBottomWidth: 1, alignSelf: 'center'}}></View>
        <Paper.TextInput
          mode='outlined'
          label='Spolupráca s'
          style={[styles.input, {marginBottom: 25}]}
          activeOutlineColor='#007aff'
          // outlineColor="#000"
          // value={state.description}
          defaultValue={store.getState().handover.cooperation}
          onChangeText={(text) => store.dispatch.handover.updateHandover('cooperation', text)}
        />
        <View style={[styles.table, { marginVertical: 0}]}>
          <RadioButton 
              Title={() => Title({title: 'Úmrtie', styleTitle: {fontSize: 25, fontWeight: '600'}})}
              initial={store.getState().handover.death.checked}
              onPress={state => store.dispatch.handover.setHandover('death', ['checked', state])}
              style={[styles.title, {marginBottom: 20}]}
          />
          {/* <Title title='Úmrtie' style={[styles.title, {marginBottom: 20}]} styleTitle={{fontSize: 25, fontWeight: '600', color: '#000'}}/> */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            {/* <TextInput
              style={[styles.input, {flex: 1}]}
              // value={state.description}
              // onChangeText={(text) => onChange(text, 'description')}
            /> */}
            <Paper.TextInput
              mode='outlined'
              label='Čas'
              style={[styles.input, {flex: 1}]}
              activeOutlineColor='#007aff'
              defaultValue={store.getState().handover.death.time}
              onChangeText={(text) => store.dispatch.handover.setHandover('death', ['time', text])}

              // outlineColor="#000"
              // value={state.description}
              // onChangeText={(text) => onChange(text, 'description')}
            />
            {/* <RadioButton
              style={{paddingVertical: 14, paddingLeft: 14}}
              // style={{}}
              // onPress={(state) => store.dispatch.handover.updateHandover('rzp', state)} 
              initial={store.getState().refusedTransportation}
            /> */}
          </View>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  table: {
    // flex: 1,
    marginVertical: 31,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  title: {
    paddingHorizontal: 10,
    // flex: 1,
    justifyContent: 'space-between',
    marginBottom: 25, 
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 22,
  },

  styleButton: {
    flex: 1,
    // justifyContent: 'space-between', 
    // alignItems: 'center',
    marginRight: 10,
    // fontSize: 25,
    // fontWeight: '500'
  },
  textButton: {
    fontSize: 25,
    fontWeight: '400'
  }
})