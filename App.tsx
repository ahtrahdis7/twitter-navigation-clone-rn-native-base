import 'react-native-gesture-handler';
import React from "react";
import {
  NativeBaseProvider,
  useColorMode
} from "native-base";
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from 'react-native-vector-icons';

import screens from './screens';
import ProStatusBar from './components/StatusBar';
import DrawerMenu from './components/DrawerMenu';
import themeUtils from './theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const dimensions = useWindowDimensions();
  const { colorMode } = useColorMode();
  return(
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={props => <DrawerMenu {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: themeUtils.getColorBackground(),
          width: dimensions.width * 0.8,
        },
      }}>
        <Drawer.Screen
          name="Landing"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Profile"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Lists"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Topics"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Bookmarks"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Moments"
          component={TabNavigator}
          options={drawerOptionsHandler}
        />
        <Drawer.Screen
          name="Monetization"
          component={TabNavigator}
          options={drawerOptionsHandler}
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
            tabBarActiveTintColor: themeUtils.getColorForeground(),
            tabBarActiveBackgroundColor: themeUtils.getColorBackground(),
            tabBarInactiveBackgroundColor: themeUtils.getColorBackground(),
            tabBarInactiveTintColor: themeUtils.getColorForeground(),
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
      backgroundColor: themeUtils.getColorBackground(),
      height: 0
    },
    headerTintColor: themeUtils.getColorForeground(),
    // tabBarBadge: null
  }
}

function drawerOptionsHandler(props: any) {
  const { colorMode } = useColorMode();
  return { 
    title: props.name,
    headerStyle: {
      backgroundColor: themeUtils.getColorBackground(),
    },
    headerTintColor: themeUtils.getColorForeground(),
  }
}



export default function App() {
  return (
    <NativeBaseProvider theme={themeUtils.theme}>
      <ProStatusBar />
      <DrawerNavigator />
    </NativeBaseProvider>
  );
}