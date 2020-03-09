import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './components/screens/screen_home';
import BucketListScreen from './components/screens/screen_bucketlist';
import ProfileScreen from './components/screens/screen_profile';
// import LoginScreen from './components/screens/screen_login';
// import PostScreen from './components/screens/screen_post';


const Tab = createMaterialBottomTabNavigator();


class Instagram extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor="#444"
                    inactiveColor="#aaa"
                    barStyle={{backgroundColor: '#fff'}}>
                    <Tab.Screen name="Home" component={HomeScreen}
                                options={{
                                    tabBarLabel: 'Home',
                                    tabBarIcon: ({color}) => (
                                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                                    ),
                                }}/>
                    <Tab.Screen name="Bucket List" component={BucketListScreen}
                                options={{
                                    tabBarLabel: 'Bucket List',
                                    tabBarIcon: ({color}) => (
                                        <MaterialCommunityIcons name="playlist-star" color={color} size={26}/>
                                    ),
                                }}/>
                    <Tab.Screen name="Profile" component={ProfileScreen}
                                options={{
                                    tabBarLabel: 'Profile',
                                    tabBarIcon: ({color}) => (
                                        <MaterialCommunityIcons name="account" color={color} size={26}/>
                                    ),
                                }}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}


export default Instagram;
