import React from 'react'
import SessionScreen from './screens/SessionScreen';
import PatientScreen from './screens/PatientScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import FindingScreen from './screens/FindingScreen';
import TableScreen from './screens/TableScreen'
import SectionScreen from './screens/SectionScreen';
import { Dimensions } from 'react-native'
import HandOverScreen from './screens/HandOverScreen';
import LastScreen from './screens/LastScreen';
import ImageMapperScreen from './screens/ImageMapperScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function MainTab() {
  return (
    <Tab.Navigator 
      initialRouteName='SessionScreen' 
      initialLayout={{ width: Dimensions.get('window').width }}
      // tabBar={() => null}
      screenOptions={{
      //   // tabBarShowLabel: false,
      //   // tabBarShowIcon: true,
      //   // tabBarItemStyle: { height: 20 },
        // tabBarVisible: false,
        tabBarItemStyle: {height: 0, padding: 1},
        tabBarStyle: {backgroundColor: 'transparent'}
      }}
    >
      <Stack.Screen 
        name='SessionScreen'
        component={ SessionScreen }
      />
      <Stack.Screen
        name='PatientScreen'
        component={ PatientScreen }
      />
      <Stack.Screen
        name='FindingSCreen'
        component={ FindingScreen }
      />
       <Stack.Screen 
        name='ImageMapperScreen'
        component={ ImageMapperScreen }
      />
      <Stack.Screen 
        name='TableScreen'
        component={ TableScreen }
      />
      <Stack.Screen 
        name='SectionScreen'
        component={ SectionScreen }
      />
      <Stack.Screen 
        name='HandOverScreen'
        component={ HandOverScreen }
      />
       <Stack.Screen 
        name='LastScreen'
        component={ LastScreen }
      />
    </Tab.Navigator>
  )
}
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{
          // headerShown: false,
          gestureEnabled: false
        }}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='MainTab' component={MainTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}