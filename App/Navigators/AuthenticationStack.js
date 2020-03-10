import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from 'App/Containers/Login/LoginScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import AppNavigator from 'App/Navigators/AppNavigator';

const Stack = createStackNavigator()

function AuthenticationStack({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Sign in',
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                    }}
                />
                <Stack.Screen name="Home" component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthenticationStack;