import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Platform,
  Linking,
  Pressable as PressableRaw
} from 'react-native';

function Pressable() {
    return <PressableRaw
            onPress={props.onPress}
            hitSlop={props.hitSlop}
            style={({ pressed }) => [props.style || {}, {opacity:pressed ? 0.5 : 1}]}
            >{props.children}</PressableRaw>
}

const { width, height } = Dimensions.get('window');
const idealWidth = width - (2 * (width * 0.05))



export default function Button(url, imageUri) {
    return (
        <View style={{
        marginVertical: Platform.OS == 'ios' ? '0%' : '2%',
        }}>
            <Pressable 
            onPress= {() => Linking.openURL(url)}
            style={{
            marginLeft: '5%',
            height: Platform.OS === 'ios' ? 180 : 180, 
            width: idealWidth,
            }}
            >
            <Image
                source={imageUri}
                style={{ 
                flex: 1, 
                width: null, 
                height: null, 
                resizeMode: 'contain',
                }} 
                />
            </Pressable>     
        </View>
    )
};





