import { Pressable, Text, Image } from 'react-native';
import { imageSelect } from '../../../assets/index'

export default function ({text, source, onPress, textStyle, imageStyle, style}) {
  return (
    <Pressable 
      onPress={() => onPress(source)}
      style={[
        {
          // alignSelf: 'stretch',
          paddingHorizontal: 20,
          paddingVertical: 3,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#000'
        },
        style]
      }
    >
      <Text style={[{width: 120, marginRight: 10, textAlign: 'left', fontSize: 20}, textStyle]}>{text}</Text>
      <Image 
        style={[{
          width: 150,
          height: 55,
          resizeMode: 'contain',
        }, imageStyle]}
        source={imageSelect('hands', source)}
      />
    </Pressable>
  )
}

