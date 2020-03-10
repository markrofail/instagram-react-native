import React from 'react'

import { TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import NewPostScreen from 'App/Containers/NewPost/NewPostScreen';
import NewsfeedScreen from 'App/Containers/Newsfeed/NewsfeedScreen';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 15,
    },
})

const Stack = createStackNavigator()

function FeedStack() {
    return (
        <Stack.Navigator initialRouteName="Newsfeed">
            <Stack.Screen
                name="Newsfeed"
                component={NewsfeedScreen}
                options={({ navigation, color, route }) => ({
                    headerRight: () => (
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Post')}>
                            <MaterialCommunityIcons name="plus-box-outline" color={color} size={26} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="Post"
                component={NewPostScreen}
                options={{
                    title: 'Add a new Post',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
        </Stack.Navigator>
    )
}

export default FeedStack;
