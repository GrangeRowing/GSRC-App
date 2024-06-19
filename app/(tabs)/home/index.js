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
import Button from '../../components/explore/Button';
import ButtonScroll from '../../components/explore/ButtonScroll';
import { Link, Stack } from 'expo-router';

const { width, height } = Dimensions.get('window');
const idealMargin = (width * 0.05) / 2;

function Pressable(props) {
  return (
    <PressableRaw
      onPress={props.onPress}
      hitSlop={props.hitSlop}
      style={({ pressed }) => [props.style || {}, { opacity: pressed ? 0.5 : 1 }]}
    >
      {props.children}
    </PressableRaw>
  );
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        borderTopColor: '#dddddd'
      }}
    >
      <Stack.Screen options={{ headerShown: true, title: "GSRC" }} />
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: '5%' }}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%'
            }}
          >
            {"UPCOMING RACES"}
          </Text>

          <View style={{ height: 130, marginTop: '2%' }}>
            <ScrollView
              horizontal={true}
              scrollEnabled={true}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: '3%' }}
            >
              <PressableRaw>
                <Category
                  imageUri={require('../../../assets/images/Event_Adverts/Chester_Regatta.png')}
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
                  imageUri={require('../../../assets/images/Event_Adverts/NAT_Schools.png')}
                  name={'NAT Schools'}
                />
              </PressableRaw>
              <PressableRaw>
                <Category
                  imageUri={require('../../../assets/images/Event_Adverts/Henley_Regatta.png')}
                  name={'Henley Regatta'}
                />
              </PressableRaw>
              <PressableRaw>
                <Category
                  imageUri={require('../../../assets/images/Event_Adverts/Wallingford_Regatta.png')}
                  name={'Wallingford Regatta'}
                />
              </PressableRaw>
              <PressableRaw>
                <Category
                  imageUri={require('../../../assets/images/Event_Adverts/York_Regatta.png')}
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
              marginTop: '5%'
            }}
          >
            {"GRANGE SHOP"}
          </Text>

          <Button
            url={'https://www.grangerowing.com/shop-4'}
            imageUri={require('../../../assets/images/Buttons/shop_button_for_homepage.png')}
          />

          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%',
              paddingTop: '5%'
            }}
          >
            {"BEHIND THE SCENES"}
          </Text>

          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: '3%', marginTop: '3%' }}
          >
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_1.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_2.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_3.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_4.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_5.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_6.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_7.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_8.png')} />
            </PressableRaw>
            <PressableRaw>
              <CategoryNoText imageUri={require('../../../assets/images/Behind_the_Scenes/Image_9.png')} />
            </PressableRaw>
          </ScrollView>

          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%',
              paddingTop: '5%'
            }}
          >
            {"FREE STUFF"}
          </Text>
          <Button
            url={'https://grangerowing.com'}
            imageUri={require('../../../assets/images/Buttons/Rowers_Recipes_Button.png')}
          />
          <Button
            url={'https://grangerowing.com'}
            imageUri={require('../../../assets/images/Buttons/Free_Download_Button.png')}
          />

          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%',
              paddingTop: '5%'
            }}
          >
            {"CLUB SUPPORT"}
          </Text>
          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: '5%', marginTop: Platform.OS === 'ios' ? '-2%' : '0%' }}
          >
            <PressableRaw>
              <ButtonScroll
                url={'https://grangerowing.com'}
                imageUri={require('../../../assets/images/Buttons/100_club.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </PressableRaw>
            <PressableRaw>
              <ButtonScroll
                url={'https://grangerowing.com'}
                imageUri={require('../../../assets/images/Buttons/Just_Giving.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </PressableRaw>
            <PressableRaw style={{ marginRight: 100 }}>
              <ButtonScroll
                url={'https://www.grangerowing.com/volunteer-support'}
                imageUri={require('../../../assets/images/Buttons/Parents_association_button.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </PressableRaw>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
