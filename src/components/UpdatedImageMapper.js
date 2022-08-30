import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import store from '../rematch/store';
import { imageSelect } from '../../assets/index'

class ImageMapper extends Component {
  buildStyle(item, index) {
    const { x1, y1, x2, y2, width, height, shape, prefill, id, radius, fill } = item;
    const { selectedAreaId } = this.props;
    let areaId = selectedAreaId;
    if (selectedAreaId === null || selectedAreaId === undefined) {
      areaId = [];
    }
    const style = {
      width: 0,
      height: 0,
      left: x1,
      top: y1
    };
    // if (prefill !== null && prefill !== undefined) {
    //   // areaId.includes(id)
    //   if (!areaId.some((item) => item.id === id)) {
    //     if (/[0-9]/.test(fill.fillWith)) {
    //       style.opacity = 0;
    //     } else {
    //       style.backgroundColor = prefill;
    //     }
    //   }
    // }
    // if (fill.fillWith !== null && fill.fillWith !== undefined){
    //   if (areaId.some((item) => item.id === id)) {
    //     console.log('PAASSS!!!', fill);
    //     if (/[0-9]/.test(fill.fillWith)) {
    //       style.opacity = 1;
    //     } else {
    //       style.backgroundColor = fill.fillWith;
    //     }
    //   }
    // }
    if (shape === 'rectangle') {
      style.width = (width === null || width === undefined) ? x2 - x1 : width;
      style.height = (height === null || height === undefined) ? y2 - y1 : height;
    }
    if (shape === 'circle') {
      style.width = radius;
      style.height = radius;
      style.borderRadius = radius / 2;
    }
    return style;
  }
  render() {
    const {
      imgHeight,
      imgWidth,
      imgSource,
      imgMap,
      containerStyle,
      selectedAreaId
    } = this.props;
    const objectArrayIndexOf = (array, id) => array.reduce((prev, next, index) => next.id === id ? index : prev, 0)
    return (
      <Animated.View style={[{ flex: 1 }, containerStyle]}>
        <ImageBackground
          style={[{ height: imgHeight, width: imgWidth }, ]}
          source={imgSource}
        >
          {imgMap.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={(event) => this.props.onPress(item, index, event)}
              style={[
                { position: 'absolute' },
                !selectedAreaId.some((el) => el.id === item.id) && this.buildStyle(item, index)
              ]}
            >
              {selectedAreaId.some((el) => el.id === item.id) && (
                <Image
                  style={[
                    this.buildStyle(selectedAreaId[objectArrayIndexOf(selectedAreaId, item.id)], index),
                    { resizeMode: 'contain'}
                  ]}
                  source={imageSelect('vectors', selectedAreaId[objectArrayIndexOf(selectedAreaId, item.id)].fill.fillWith)}
                />
              )}
            </TouchableOpacity>
          ))}
        </ImageBackground>
      </Animated.View>
    );
  }
}

export default ImageMapper;