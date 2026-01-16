import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeDriveScreen from '../screens/HomeDriveScreen';
import NewsScreen from '../screens/NewsScreen';
import ScioperiScreen from '../screens/ScioperiScreen';
import AnnunciScreen from '../screens/AnnunciScreen';
import TempoLiberoScreen from '../screens/TempoLiberoScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import ChatScreen from '../screens/ChatScreen';
import { COLORS } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';

            switch (route.name) {
              case 'Archivio':
                iconName = 'folder';
                break;
              case 'News':
                iconName = 'newspaper';
                break;
              case 'Scioperi':
                iconName = 'megaphone';
                break;
              case 'Annunci':
                iconName = 'notifications';
                break;
              case 'Tempo libero':
                iconName = 'sunny';
                break;
              case 'Benefits':
                iconName = 'gift';
                break;
              case 'Chat':
                iconName = 'chatbubbles';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
  name="Archivio"
  component={HomeDriveScreen}
  options={{ headerTitle: 'Archivio Documenti' }}
/>

        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Scioperi" component={ScioperiScreen} />
        <Tab.Screen name="Annunci" component={AnnunciScreen} />
        <Tab.Screen name="Tempo libero" component={TempoLiberoScreen} />
        <Tab.Screen name="Benefits" component={BenefitsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
