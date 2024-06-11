import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
  Linking,
  Pressable as PressableRaw
} from 'react-native';
import Category from '../../components/explore/Category';
import CategoryNoText from '../../components/explore/CategoryNoText';

import Button from '../../components/explore/Button'
import ButtonScroll from '../../components/explore/ButtonScroll'
import { Link, Stack } from 'expo-router'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const { width, height } = Dimensions.get('window');
const idealMargin = (width * 0.05) / 2

function Pressable(props: any) {
  return <PressableRaw
          onPress={props.onPress}
          hitSlop={props.hitSlop}
          style={({ pressed }) => [props.style || {}, {opacity:pressed ? 0.5 : 1}]}
          >{props.children}</PressableRaw>
}

export default function Index() {
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        borderTopColor: 'dddddd'
      }}
    >
      <Stack.Screen options={{headerShown: true, title: "GSRC"}} />
      <ScrollView
      scrollEventThrottle={16}
      >
        <View style={{
          flex: 1,
          paddingTop: '5%'}}
          >

          <Text
          style={{
          fontSize: Platform.OS === 'ios' ? 14 : 18, 
          fontWeight: '700',
          paddingLeft: '5%'
          }}>
            {"UPCOMING RACES"}
          </Text>

          <View style={{
            height: 130,
            marginTop: '2%'
          }}>
            <ScrollView 
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: '3%'}}
            >
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/Chester Regatta.png')} 
                name={'Chester Regatta'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/Club Regatta and Barbecue.png')} 
                name={'Club Regatta'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                  imageUri={require('../../../assets/images/Event Adverts/Lea Regatta.png')} 
                  name={'Lea Regatta'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/NAT Schools.png')} 
                name={'NAT Schools'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/Henley Regatta.png')} 
                name={'Henley Regatta'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/Wallingford Regatta.png')} 
                name={'Wallingford Regatta'} 
                />
              </PressableRaw>
              <PressableRaw>
                <Category 
                imageUri={require('../../../assets/images/Event Adverts/York Regatta.png')} 
                name={'York Regatta'} 
                />
              </PressableRaw>
            </ScrollView>
          </View>
          <Text
          style={{
          fontSize: Platform.OS === 'ios' ? 14 : 18, 
          fontWeight: '700',
          paddingLeft: '5%',
          marginTop: '5%'}}>
            {"GRANGE SHOP"}
          </Text>

          <Button
          url={'https://grangerowing.com/'}
          imageUri={require('../../../assets/images/Buttons/Grange Shop Button.png')}
          />

          <Text
          style={{
          fontSize: Platform.OS === 'ios' ? 14 : 18, 
          fontWeight: '700',
          paddingLeft: '5%',
          paddingTop: '5%'}}>
            {"BEHIND THE SCENES"}
          </Text>

          <ScrollView 
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: '3%', marginTop: '3%'}}
            >
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 1.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 2.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 3.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 4.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 5.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 6.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 7.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 8.png')}/>
              </PressableRaw>
              <PressableRaw>
                <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 9.png')}/>
              </PressableRaw>
            </ScrollView>

          <Text
            style={{
            fontSize: Platform.OS === 'ios' ? 14 : 18, 
            fontWeight: '700',
            paddingLeft: '5%',
            paddingTop: '5%'}}>
              {"FREE STUFF"}
          </Text>
          <Button 
          url={'https://grangerowing.com'}
          imageUri={require('../../../assets/images/Buttons/Rowers Recipes Button.png')}
          />
          <Button 
          url={'https://grangerowing.com'}
          imageUri={require('../../../assets/images/Buttons/Free Download Button.png')}
          />

            <Text
            style={{
            fontSize: Platform.OS === 'ios' ? 14 : 18, 
            fontWeight: '700',
            paddingLeft: '5%',
            paddingTop: '5%'}}>
              {"CLUB SUPPORT"}
            </Text>
          <ScrollView 
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: '5%', marginTop: Platform.OS === 'ios' ? '-2%' : '0%'}}
            >
            <PressableRaw>
              <ButtonScroll 
              url={'https://grangerowing.com'}
              imageUri={require('../../../assets/images/Buttons/100 club.png')}
              buttonHeight={110}
              buttonWidth={ ((width - (2 * (width * 0.2))) / 2) }
              />
            </PressableRaw>
            <PressableRaw>
              <ButtonScroll 
              url={'https://grangerowing.com'}
              imageUri={require('../../../assets/images/Buttons/Just Giving.png')}
              buttonHeight={110}
              buttonWidth={ ((width - (2 * (width * 0.2))) / 2) }
              />
            </PressableRaw>
            <PressableRaw style={{marginRight: 100}}>
              <ButtonScroll 
              url={'https://grangerowing.com'}
              imageUri={require('../../../assets/images/Buttons/Parents association button.png')}
              buttonHeight={110}
              buttonWidth={ ((width - (2 * (width * 0.2))) / 2) }
              />
            </PressableRaw>
            </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}