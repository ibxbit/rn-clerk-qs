import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const { isSignedIn } = useAuth ()

  if (!isSignedIn) return <Redirect href="/(auth)" />

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#657786',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E1E8ED',
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({color,size}) => 
          <AntDesign name="home" 
          size={24} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({color,size}) => 
          <Feather name="search" 
          size={24} 
          color={color} 
          />,
        }}
      />

      <Tabs.Screen
        name='library'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" size={24} color={color} />
          ),
        }}
      />
    </Tabs>

  )
}

export default TabsLayout