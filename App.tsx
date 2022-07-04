import 'react-native-gesture-handler';
import React from "react";
import {
  NativeBaseProvider,
  useColorMode
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from 'react-native-vector-icons';

import screens from './screens';
import ProStatusBar from './components/StatusBar';
import theme from './theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Landing"
          component={TabNavigator}
          options={{ title: '' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function TabNavigator() {
  // const { colors } = useTheme();
  const { colorMode } = useColorMode();
  return (
    // <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
              } else if (route.name === 'Messages') {
                iconName = focused ? 'mail' : 'mail-outline';
              } else if (route.name === 'Mic') {
                iconName = focused ? 'mic' : 'mic-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: 10 }} />;
            },
            tabBarActiveTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
            tabBarActiveBackgroundColor: colorMode == 'light' ? '#f8fafc' : '#0f172a',
            tabBarInactiveBackgroundColor: colorMode == 'light' ? '#f8fafc' : '#0f172a',
            tabBarInactiveTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
            tabBarStyle: {
              height: 60,
            }
          })}
        >
          <Tab.Screen
            name="Home"
            component={screens.Home}
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Search" 
            component={screens.Notifications}             
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Mic" 
            component={screens.Profile}             
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Notifications" 
            component={screens.Notifications}             
            options={optionsHandler}
          />
          <Tab.Screen 
            name="Messages" 
            component={screens.Messages}
            options={optionsHandler}
          />
        </Tab.Navigator>
    // </NavigationContainer>
  )
}

function optionsHandler(props: any) {
  const { colorMode } = useColorMode();
  return { 
    title: "",
    headerStyle: {
      backgroundColor: colorMode == 'light' ? '#f8fafc' : '#0f172a',
      height: 0
    },
    headerTintColor: colorMode == 'light' ? '#0f172a' : '#f8fafc',
    // tabBarBadge: null
  }
}



export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ProStatusBar />
      <DrawerNavigator />
    </NativeBaseProvider>
  );
}