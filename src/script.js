import React, { useRef, useState} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Animated, Image, Modal, Pressable, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { stylesGlobal } from '../styles/style'
import store from '../rematch/store'
import { FRONT_MAP, BACK_MAP } from '../data'
import ImageMapper from '../components/UpdatedImageMapper'
import ImageModal from '../components/imageMapperScreen/ImageModal'
import { imageSelect } from '../../assets'


export default function LastScreen() {
  const [side, setSide] = useState(true);
  const sideName = side ? 'front' : 'back';
  const map = side ? FRONT_MAP : BACK_MAP;
  // const selectedAreaId = store.getState().image[sideName];
  // const [selectedId, setSelectedId] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const objectArrayIndexOf = (array, id) => array.reduce((prev, next, index) => next.id === id ? index : prev, -1)
  const mapperAreaClickHandler = async (item, idx, event) => {
    const currentSelectedAreaId = store.getState().image[sideName];
    // console.log(currentSelectedAreaId, 'ARRAY');
    // console.log(store.getState().image[sideName], 'ARRAY2');
    // const indexInState = currentSelectedAreaId.indexOf(item.id);
    // console.log(item, 'ITEM');
    const indexInState =  objectArrayIndexOf(currentSelectedAreaId, item.id);
    console.log(indexInState, 'INDEX');
    if (indexInState !== -1) {
      store.dispatch.image.removeImage(sideName, item.id)
      // store.dispatch.image.setImage(sideName, [
      //   ...currentSelectedAreaId.slice(0, indexInState),
      //   ...currentSelectedAreaId.slice(indexInState + 1),
      // ])
      // setSelectedAreaId([
      //   ...currentSelectedAreaId.slice(0, indexInState),
      //   ...currentSelectedAreaId.slice(indexInState + 1),
      // ]);
      console.log('Removing id', item.id, currentSelectedAreaId);
    } else {
      setModalVisible(true)
      // alert(`Clicked Item Id: ${item.id}`);
      store.dispatch.image.setImage(sideName, map[objectArrayIndexOf(map, item.id)])
      // setSelectedAreaId([...currentSelectedAreaId, {id: item.id, type: ''}]);
      console.log('Setting Id', item.id, currentSelectedAreaId);
    }
  };
  const transform = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const flipAnimation = () => {
    // console.log('trans', transform, 'opc', opacity, frontOpacity, backOpacity);
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
      ]).start(({ finished }) => {if (finished) setSide(false)});
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
      ]).start(({ finished }) => {if (finished) setSide(true)});
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
        <ImageModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
          animatedRef={opacity}
          onPress={(item, idx, event) => {
            mapperAreaClickHandler(item, idx, event)
          }}
          containerStyle={{flex: 1, alignItems: 'center', overflow: 'hidden'}}
          selectedAreaId={store.getState().image[sideName]}
          side={sideName}
          multiselect
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