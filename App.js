import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Welcome from './src/pages/Welcome';
import Home from './src/pages/Home';
import Wallet from './src/pages/Wallet';
import Profile from './src/pages/Profile';

// Import PNG icons
import homeIcon from './assets/home.png';
import walletIcon from './assets/wallet.png';
import profileIcon from './assets/profile.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // This hides the header for all tab screens
        tabBarShowLabel: false, // This hides the text under the icons
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
                tintColor: focused ? '#007AFF' : 'gray' 
              }} 
            />
          );
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}