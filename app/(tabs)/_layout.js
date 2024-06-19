import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#006973',
      tabBarActiveBackgroundColor: '#F2F2F2',
      tabBarStyle: {
        height: Platform.OS === 'ios' ? '12%' : '8%'
      },
      tabBarShowLabel: false
      }}>
        <Tabs.Screen 
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome 
              size={Platform.OS === 'ios' ? 27 : 36}
              // style={{marginBottom: -3}}
              name="home"
              color={color}
            />
          ),
        }}
        />
        <Tabs.Screen 
        name="calendar"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome 
              size={Platform.OS === 'ios' ? 27 : 36}
              // style={{marginBottom: -3}}
              name="calendar-check-o"
              color={color}
            />
          ),
        }}
        />
        <Tabs.Screen 
        name="news"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome 
              size={Platform.OS === 'ios' ? 27 : 36}
              // style={{marginBottom: -3}}
              name="newspaper-o"
              color={color}
            />
          ),
        }}
        />
        <Tabs.Screen 
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome 
              size={Platform.OS === 'ios' ? 27 : 36}
              // style={{marginBottom: -3}}
              name="user"
              color={color}
            />
          ),
        }}
        />
    </Tabs>
  );
}
