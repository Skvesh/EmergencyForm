import React, { useEffect, useRef, useState} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Animated, Image, Modal, Pressable, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import { FRONT_MAP, BACK_MAP } from '../data'
import ImageMapper from '../components/UpdatedImageMapper'
import ImageModal from '../components/imageMapperScreen/ImageModal'
import { imageSelect } from '../../assets'


export default function LastScreen() {
  const [side, setSide] = useState(true);
  const sideName = side ? 'front' : 'back'
  const map = side ? FRONT_MAP : BACK_MAP;
  // const [selectedAreaId, setSelectedAreaId] = useState([store.getState().image[sideName]]);
  const [selectedId, setSelectedId] = useState('')
  const selectedAreaId = store.getState().image[sideName];
  const [refresh, setRefresh] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const objectArrayIndexOf = (array, id) => array.reduce((prev, next, index) => next.id === id ? index : prev, -1)
  const mapperAreaClickHandler = async (item, idx, event) => {
    const currentSelectedAreaId = selectedAreaId;
    const indexInState =  objectArrayIndexOf(currentSelectedAreaId, item.id);
    console.log(indexInState, 'INDEX');
    if (indexInState !== -1) {
      store.dispatch.image.removeImage(sideName, item.id)
      setRefresh(!refresh)
      // setSelectedAreaId([
      //   ...currentSelectedAreaId.slice(0, indexInState),
      //   ...currentSelectedAreaId.slice(indexInState + 1),
      // ]);
      console.log('Removing id', item.id, selectedAreaId);
    } else {
      setModalVisible(true)
      store.dispatch.image.setImage(sideName, map[objectArrayIndexOf(map, item.id)])
      setSelectedId(item.id)
      // setSelectedAreaId([...currentSelectedAreaId, map[objectArrayIndexOf(map, item.id)]]);
      console.log('Setting Id', item.id, selectedAreaId);
    }
  };
  const modalClickHandler = (key, value) => {
    const indexInState =  objectArrayIndexOf(selectedAreaId, selectedId);
    console.log('OBJECT', selectedAreaId[indexInState].fill, key, String(value));
    store.dispatch.image.updateImage(sideName, [indexInState, {...selectedAreaId[indexInState].fill, [key]: value}])
    if (key !== 'sine') {
      setModalVisible(false)
    } else {
      setRefresh(!refresh)
    }
  }
  const transform = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const flipAnimation = () => {
    if (side) {
      Animated.parallel([
        Animated.timing(transform, {
          toValue: 180,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: true,
        })
      ]).start(() => setSide(false));
    } else {
      Animated.parallel([
        Animated.timing(transform, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          useNativeDriver: true,
        })
      ]).start(() => setSide(true));
    }
  };
  const frontOpacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });
  const backOpacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });
  const setInterpolate = transform.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const opacityFrontAnimatedStyle = {
    opacity: frontOpacity
  };
  const opacityBackAnimatedStyle = {
    opacity: backOpacity
  };
  const transformAnimatedStyle = {
    transform: [{ rotateY: setInterpolate }],
  };
  return (
    <ScrollView style={stylesGlobal.container}>
      {/* <View style={{flex: 1, alignItems: 'center'}}> */}
        <ImageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPress={modalClickHandler}
          sideName={sideName}
          id={selectedId}
        />
        <TouchableOpacity 
          onPress={flipAnimation}
          style={styles.flipImage}
        >
          <Animated.Image
            style={[{position: 'absolute', top: 3, left: 3}, opacityBackAnimatedStyle, transformAnimatedStyle ,styles.imageStyle]}
            source={require('../../assets/back-mini.png')}
          />
          <Animated.Image
            style={[opacityFrontAnimatedStyle, transformAnimatedStyle,styles.imageStyle]}
            source={require('../../assets/front-mini.png')}
          />
        </TouchableOpacity>
        <ImageMapper
          imgHeight={650}
          imgWidth={300}
          imgSource={side ? imageSelect('bigImages', 'front') : imageSelect('bigImages', 'back')}
          imgMap={map}
          onPress={(item, idx, event) => {
            mapperAreaClickHandler(item, idx, event)
          }}
          containerStyle={{flex: 1, alignItems: 'center', overflow: 'hidden'}}
          selectedAreaId={selectedAreaId}
        />
      {/* </View> */}
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 100,
    resizeMode: 'cover',
  },
  flipImage: {
    position: 'absolute',
    top: 20,
    left: 0,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#007aff',
    borderRadius: 10,
    zIndex: 1,
  }
})