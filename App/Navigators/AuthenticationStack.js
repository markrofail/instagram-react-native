import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'App/Containers/Login/LoginScreen';

const Stack = createStackNavigator()

function AuthenticationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthenticationStack;