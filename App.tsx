import React from "react";
import {
  NativeBaseProvider,
  useColorMode
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import screens from './screens';
import ProStatusBar from './components/StatusBar';
import theme from './theme';

const Tab = createBottomTabNavigator();

function Navigator() {
  // const { colors } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle-sharp'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications-circle-sharp' : 'notifications-circle-outline';
              } else if (route.name === 'Messages') {
                iconName = focused ? 'document-text-sharp' : 'document-text-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
            tabBarActiveBackgroundColor: colorMode == 'light' ? '#e2e8f0' : '#1e293b',
            tabBarInactiveBackgroundColor: colorMode == 'light' ? '#f8fafc' : '#0f172a',
            tabBarInactiveTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
          })}
        >
          <Tab.Screen
            name="Home"
            component={screens.Home}
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Messages" 
            component={screens.Messages}
            options={optionsHandler}
           />
          <Tab.Screen 
            name="Profile" 
            component={screens.Profile}             
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Notifications" 
            component={screens.Notifications}             
            options={optionsHandler}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ProStatusBar />
      <Navigator />
    </NativeBaseProvider>
  );
}

function optionsHandler(props: any) {
  const { colorMode } = useColorMode();
  return { 
    title: props.title,
    headerStyle: {
      backgroundColor: colorMode == 'light' ? '#f8fafc' : '#0f172a',
    },
    headerTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
  }
}

