import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FeedNavigation from 'App/Navigators/FeedNavigation';
import ProfileScreen from 'App/Containers/Profile/ProfileScreen';
import BucketListScreen from 'App/Containers/BucketList/BucketListScreen';

const Tab = createMaterialBottomTabNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Newsfeed"
        activeColor="#444"
        inactiveColor="#aaa"
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen name="Newsfeed" component={FeedNavigation}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Bucket List" component={BucketListScreen}
          options={{
            tabBarLabel: 'Bucket List',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="playlist-star" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
