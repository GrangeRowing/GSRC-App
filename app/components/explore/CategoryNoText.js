import React from 'react';
import {
  View,
  Image,
} from 'react-native';


export default function category(imageUri) {
  return (
    <>
        <View style={{
        height: 130,
        width: 130,
        marginLeft: 7,
        marginRight: 7,
       }}> 
            <View style={{ flex: 1 }}>
                <Image
                    source={imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
            </View>
        </View>
    </>
  );
}