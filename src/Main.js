import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './components/screens/screen_home';
import PostScreen from './components/screens/screen_post';
import LoginScreen from './components/screens/screen_login';
import ProfileScreen from './components/screens/screen_profile';
import BucketListScreen from './components/screens/screen_bucketlist';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function AuthenticationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 15
    },
})


function ApplicationStack() {
    return (
        <Stack.Navigator initialRouteName="Newsfeed">
            <Stack.Screen name="Newsfeed" component={HomeScreen}
                          options={({navigation, color, route}) => ({
                              headerRight: () => (
                                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Post')}>
                                      <MaterialCommunityIcons name="plus-box-outline" color={color} size={26}/>
                                  </TouchableOpacity>
                              ),
                          })}/>
            <Stack.Screen name="Post" title='Add a new Post' component={PostScreen}
                          options={{
                              title: 'Add a new Post',
                          }}/>
        </Stack.Navigator>
    );
}

class Instagram extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor="#444"
                    inactiveColor="#aaa"
                    barStyle={{backgroundColor: '#fff'}}>
                    <Tab.Screen name="Newsfeed" component={ApplicationStack}
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
