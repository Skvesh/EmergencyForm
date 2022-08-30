import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function DropdownList({ endScreen, property, onPress }) {
  const [state, setState] = useState({});
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('PP');
  const viewRef = useRef(null);
  const data = [
    { value: 'Áno', key: 1},
    { value: 'Nie', key: 2}
  ]
  function onLayout(e) {
    const {x, y, height, width} = e.nativeEvent.layout;
    const newLayout = {
      height,
      width,
      left: x,
      top: y,
    };
    setState(state => ({...state, ...newLayout}));
    // console.log('newstate', x, y, height, width);
  }
  return (
    <View style={{flex: 1, zIndex: 99}} >
      <View style={{height: 6}}></View>
      <TouchableOpacity style={crutchStyle(visible, endScreen)} 
        onPress={() => {
          setVisible(!visible);
          if (visible) {
            setTitle('PP')
            onPress(property, '');
          }
        }} 
        onLayout={(event) => onLayout(event)}
      >
        <View ref={viewRef} style={{
          // position: 'relative',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={[styles.text, { marginRight: 5 }]}>{title}</Text>
          <Image style={styles.image} source={visible 
            ? require(`../../../assets/front.png`) 
            : require(`../../../assets/icons/expand_less.png`)}
          />
        </View>
      </TouchableOpacity >
      { !!visible && (
        <View style={[styles.dropdown, { 
          flexDirection: endScreen ? 'column-reverse' : 'column', 
          width: state.width, 
          top: endScreen 
            ? - state.height - state.height + state.top + state.top + state.top - 1
            : state.height + state.top 
        }]}>
          <TouchableOpacity 
            style={[listStyle(endScreen), {height: state.height - 6}]} 
            onPress={() => {
              onPress(property, data[0].value);
              setTitle(data[0].value)
              setVisible(!visible)
            }}
          >
            <Text style={styles.text}>{data[0].value}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[listStyle(endScreen), {height: state.height - 6}]} 
            onPress={() => {
              onPress(property, data[1].value);
              setTitle(data[1].value)
              setVisible(!visible)
            }}
          >
            <Text style={styles.text}>{data[1].value}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const crutchStyle = (visible, endScreen) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  borderTopLeftRadius: visible & endScreen ? 0 : 4,
  borderTopRightRadius: visible & endScreen ? 0 : 4,
  borderBottomLeftRadius: visible & !endScreen ? 0 : 4,
  borderBottomRightRadius: visible & !endScreen ? 0 : 4,
  borderRadius: 4,
  borderColor: 'rgba(0,0,0,0.54)',
  borderWidth: 1,
  backgroundColor: '#fff',
})
const listStyle = (endScreen) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: !endScreen ? 1 : 0,
  borderTopWidth: endScreen ? 1 : 0,
  borderColor: 'rgba(0,0,0,0.54)',
})
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    // color: '#717171'
    color: '#000'
  },
  image: {
    width: 30,
    height: 30,
  },
  dropdown: {
    position: 'absolute',
    zIndex: 100,
    borderColor: 'rgba(0,0,0,0.54)',
    backgroundColor: '#fff',
  },
})