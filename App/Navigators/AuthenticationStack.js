import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';
import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/Auth/Actions'

import AppNavigator from 'App/Navigators/AppNavigator';
import LoginScreen from 'App/Containers/Login/LoginScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import { userService } from 'App/Services/UserService'

const Stack = createStackNavigator()
const AuthContext = React.createContext();

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length > 0
}

function AuthenticationStack({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                let emailIsValid = validateEmail(data.email);
                if (!emailIsValid) {
                    ToastAndroid.showWithGravity('please enter a valid email', ToastAndroid.SHORT, ToastAndroid.TOP);
                    return;
                }

                let passwordIsValid = validatePassword(data.password);
                if (!passwordIsValid) {
                    ToastAndroid.showWithGravity('please enter your password', ToastAndroid.SHORT, ToastAndroid.TOP);
                    return;
                }

                userService.authUser(data.email, data.password).then((response) => {
                    dispatch({ type: 'SIGN_IN', token: response.accessToken });
                }).catch(() => {
                    ToastAndroid.showWithGravity('incorrect username/password', ToastAndroid.SHORT, ToastAndroid.TOP);
                });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    {state.userToken == null ?
                        (
                            <Stack.Screen name="SignIn" component={LoginScreen} />
                        ) :
                        (
                            <Stack.Screen name="Home" component={AppNavigator} />
                        )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export {
    AuthenticationStack,
    AuthContext
};