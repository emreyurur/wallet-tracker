import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './src/pages/Welcome';
import Home from './src/pages/Home';
import Wallet from './src/pages/Wallet';
import Profile from './src/pages/Profile';
import Education from './src/pages/Education';
import NFT from './src/pages/NFT';
import Investment from './src/pages/Investment';


import homeIcon from './assets/home.png';
import walletIcon from './assets/wallet.png';
import profileIcon from './assets/profile.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Wallet') {
            iconSource = walletIcon;
          } else if (route.name === 'Profile') {
            iconSource = profileIcon;
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: focused ? '#FFFFFF' : '#888888'
              }}
            />
          );
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#888888',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Education" component={Education}/>
        <Stack.Screen name="NFT" component={NFT}/>
        <Stack.Screen name="Investment" component={Investment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}