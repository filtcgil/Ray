import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import StrikesScreen from '../screens/StrikesScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';
import FreeTimeScreen from '../screens/FreeTimeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Strikes" component={StrikesScreen} />
        <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
        <Stack.Screen name="FreeTime" component={FreeTimeScreen} />
        <Stack.Screen name="Benefits" component={BenefitsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
    }
