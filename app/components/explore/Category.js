import React from 'react';
import {
  View,
  Text,
  Image,
  Platform
} from 'react-native';
import {useFonts, Lato_300Light} from '@expo-google-fonts/lato';

export default function category(imageUri, name) {
  let [fontsLoaded, fontError] = useFonts({
    Lato_300Light
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    
    <>
        <View style={{
        height: 130,
        width: 130,
        marginLeft: 7,
        marginRight: 7,
        borderWidth: 1.5,
        borderColor: '#dddddd'
       }}> 
            <View style={{ flex: 2 }}>
                <Image
                    source={imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
            </View>
            <View style={{ flex: 1, paddingLeft: '2%', justifyContent: 'center'}}>
              <View style={{alignSelf: 'center', paddingHorizontal: '1%',}}>
                <Text 
                allowFontScaling={true} 
                adjustsFontSizeToFit={true} 
                numberOfLines={2}
                minimumFontScale={0.7}
                style={{
                  fontSize: Platform.OS === 'ios' ? 12 : 14,
                  textAlign: 'center',
                  fontFamily: 'Lato_300Light',
                  lineHeight: 15
                }}
                >
                  {name}
                </Text>
              </View>
            </View>
        </View>
    </>
  );
}