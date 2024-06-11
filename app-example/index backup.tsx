import React, { useEffect } from 'react';
import { Text, View, Platform, Alert } from 'react-native';
import { router } from 'expo-router';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { supabase } from '../lib/supabase';
import { getApps, initializeApp } from 'firebase/app';
import 'firebase/messaging';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6di1O84-vHxtqopujwXklpxrVP45iqaI",
  authDomain: "gsrc-app.firebaseapp.com",
  projectId: "gsrc-app",
  storageBucket: "gsrc-app.appspot.com",
  messagingSenderId: "315016896909",
  appId: "1:315016896909:web:88a3cecf4da506e5a49dc4",
};

// Initialize Firebase if not already initialized
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

// Set the handler for notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const registerForPushNotificationsAsync = async () => {
  let token;
  console.log("Constants.isDevice:", Constants.isDevice); // Log to check if the device is detected correctly
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    console.log("Existing Permission Status:", existingStatus); // Log the existing permission status
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      console.log("Requested Permission Status:", status); // Log the requested permission status
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    try {
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Expo Push Token:", token); // Log the obtained Expo push token
    } catch (error) {
      console.error("Error getting Expo push token:", error); // Log any error while getting the token
    }
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function IndexPage() {
  useEffect(() => {
    // Register for push notifications
    registerForPushNotificationsAsync().then(token => {
      console.log("Expo Push Token: ", token);
      // Optionally, send this token to your server to subscribe the device to notifications
    });

    // Handle notification reception
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Unsubscribe from notification listeners on component unmount
    return () => {
      subscription.remove();
      responseListener.remove();
    };
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session && session.user) {
        router.replace("/(tabs)/home");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session && session.user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace('/(auth)/login');
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}
