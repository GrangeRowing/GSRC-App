import React, { useEffect, useState, ReactNode } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Pressable as PressableRaw,
  PressableProps,
  StyleProp,
  ViewStyle
} from 'react-native';
import supabase from './supabaseClient'; // Correct path for supabaseClient
import Category from './components/explore/Category'; // Correct path for Category
import CategoryNoText from './components/explore/CategoryNoText'; // Correct path for CategoryNoText
import Button from './components/explore/Button'; // Correct path for Button
import ButtonScroll from './components/explore/ButtonScroll'; // Correct path for ButtonScroll
import { Link, Stack } from 'expo-router';

const { width, height } = Dimensions.get('window');

interface CustomPressableProps extends PressableProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Pressable(props: CustomPressableProps) {
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

interface RaceEvent {
  id: number;
  title: string;
  location: string;
  image_url: string;
  transport: string;
  date: string;
}

export default function Index() {
  const [races, setRaces] = useState<RaceEvent[]>([]);

  useEffect(() => {
    fetchRaces();
  }, []);

  const fetchRaces = async () => {
    const { data, error } = await supabase
      .from('race_events')
      .select('*')
      .gte('date', new Date().toISOString())
      .lte('date', new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString())
      .order('date', { ascending: true });

    if (error) {
      console.error(error);
    } else {
      setRaces(data as RaceEvent[]);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        borderTopColor: 'dddddd'
      }}
    >
      <Stack.Screen options={{ headerShown: true, title: 'GSRC' }} />
      <ScrollView scrollEventThrottle={16}>
        <View
          style={{
            flex: 1,
            paddingTop: '5%'
          }}
        >
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%'
            }}
          >
            {'UPCOMING RACES'}
          </Text>

          <View
            style={{
              height: 130,
              marginTop: '2%'
            }}
          >
            <ScrollView
              horizontal={true}
              scrollEnabled={true}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: '3%' }}
            >
              {races.map((race) => (
                <Pressable key={race.id}>
                  <Category
                    imageUri={{ uri: race.image_url }}
                    name={race.title}
                  />
                </Pressable>
              ))}
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
            {'GRANGE SHOP'}
          </Text>

          <Button
            url={'https://www.grangerowing.com/shop-4'}
            imageUri={require('../../../assets/images/Buttons/shop button for homepage.png')}
          />

          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%',
              paddingTop: '5%'
            }}
          >
            {'BEHIND THE SCENES'}
          </Text>

          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: '3%', marginTop: '3%' }}
          >
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 1.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 2.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 3.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 4.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 5.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 6.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 7.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 8.png')} />
            </Pressable>
            <Pressable>
              <CategoryNoText imageUri={require('../../../assets/images/Behind the Scenes/Image 9.png')} />
            </Pressable>
          </ScrollView>

          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 14 : 18,
              fontWeight: '700',
              paddingLeft: '5%',
              paddingTop: '5%'
            }}
          >
            {'FREE STUFF'}
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
              paddingTop: '5%'
            }}
          >
            {'CLUB SUPPORT'}
          </Text>
          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: '5%', marginTop: Platform.OS === 'ios' ? '-2%' : '0%' }}
          >
            <Pressable>
              <ButtonScroll
                url={'https://grangerowing.com'}
                imageUri={require('../../../assets/images/Buttons/100 club.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </Pressable>
            <Pressable>
              <ButtonScroll
                url={'https://grangerowing.com'}
                imageUri={require('../../../assets/images/Buttons/Just Giving.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </Pressable>
            <Pressable style={{ marginRight: 100 }}>
              <ButtonScroll
                url={'https://www.grangerowing.com/volunteer-support'}
                imageUri={require('../../../assets/images/Buttons/Parents association button.png')}
                buttonHeight={110}
                buttonWidth={((width - (2 * (width * 0.2))) / 2)}
              />
            </Pressable>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
