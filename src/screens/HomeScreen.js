import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AnimationCircle from '../components/AnimationCircle'
import { useFocusEffect } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../rematch/store';
import RNFS from 'react-native-fs';

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState(false);
  const [download, setDownload] = useState('false');
  const path = RNFS.DocumentDirectoryPath + '/test.json';

  const handlePress = async () => {
    try {
      await RNFS.writeFile(path, data, 'utf8');
      console.log('Success!');
    } catch (error) {
      console.log(error);
    }
  };
  const remove = async () => {
    const keys = ['localData', 'download']
    try {
      await AsyncStorage.multiRemove(keys)
      setValue(false);
      setDownload('false');
      store.redux.dispatch({ type: 'RESET_APP' })
    } catch(e) {
      // console.log(e);
    }
  }
  const load = async (string) => {
    try {
      const item = await AsyncStorage.getItem(string);
      setDownload(item)
    } catch (error) {
      // console.log(error);
    }
  };
  // const download = load('download')
  const { getItem } = useAsyncStorage('localData');
  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item != null);
    // console.log('AWAIR', JSON.parse(item));
  };
  useFocusEffect(
    React.useCallback(() => {
      load('download');
      readItemFromStorage();
      console.log(value, 'value', download, 'download');
      return () => {console.log(value, download);};
    }, [])
  );
  const CircleButton = ({title, onPress, big, small, text}) => (
    <TouchableOpacity style={[styles.bigCircle, big]} onPress={onPress}>
      <View style={[styles.smallCircle, small]}>
        <Text style={[styles.text, text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
  const Cicrle = () => {
    if (download === 'true') {
      return (
        <TouchableOpacity 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {handlePress(); remove()}}
        >
          <CircleButton
            title='Stiahnuť'
            text={{fontSize: 25}}
            small={{margin: 30}}
          />
          <AnimationCircle circle={{width: 30, height: 30}}/>
        </TouchableOpacity>
      )
    } else if (value) {
      return (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.push('MainTab')}>
          <CircleButton
            title='V processe'
            text={{fontSize: 25}}
            small={{margin: 25}}
            onPress={() => navigation.push('MainTab')}
          />
          <AnimationCircle />
        </TouchableOpacity>
      )
    } else {
      return (
        <CircleButton title='Výtvoriť' onPress={() => navigation.push('MainTab')}/>
      )
    }
  }
  return (
    <View style={styles.container}>
      <Cicrle></Cicrle>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  bigCircle: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderWidth: 5,
    borderColor:'rgba(0,0,0,0.1)',
    borderRadius: 150,
    backgroundColor: '#007aff',
  },
  smallCircle: {
    flex: 1,
    margin: 20,
    borderRadius: 150,
    // borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: '#FFA8EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 30,
    letterSpacing: 3.5,
    fontWeight: '900',
    color: '#fff'
  }
})

