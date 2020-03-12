import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from 'App/Navigators/AppNavigator';
import LoginScreen from 'App/Containers/Login/LoginScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

const Stack = createStackNavigator()

class AuthenticationStack extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    {this.props.token ?
                        // this.props.authIsLoading ?
                        // <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        // :
                        <Stack.Screen name="Home" component={AppNavigator} />
                        :
                        <Stack.Screen name="SignIn" component={LoginScreen} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

AuthenticationStack.propTypes = {
    token: PropTypes.object,
    authIsLoading: PropTypes.bool,
    authErrorMessage: PropTypes.string,
}


const mapStateToProps = (state) => ({
    token: state.user.token,
    authIsLoading: state.user.authIsLoading,
    authErrorMessage: state.user.authErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationStack)
