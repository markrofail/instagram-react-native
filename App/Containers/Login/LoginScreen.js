import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
import { Button, View, Image, Text, ToastAndroid, ActivityIndicator } from 'react-native'
import { showMessage, hideMessage } from "react-native-flash-message";

import Style from './LoginScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

import UserActions from 'App/Stores/User/Actions'

function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && re.test(email);
}

function validatePassword(password) {
  return password && password.length > 0
}

function showError(message) {
  showMessage({
    message: message,
    type: "info",
    autoHide: false
  });
}

class LoginScreen extends Component {
  state = { email: null, password: null }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.form}>
          {this.props.authIsLoading ? (
            <View style={Style.loading}>
              <ActivityIndicator size='large' />
            </View>
          ) : <></>
          }
          <Image
            style={Style.logo}
            source={require('App/Assets/Images/instagram_text.png')}
          />
          {this.props.authErrorMessage != null ? (
            <Text style={Style.alert}>{this.props.authErrorMessage}</Text>
          ) : (<></>)}

          <TextInput
            mode="outlined"
            style={Style.formInput}
            placeholder="Email"
            autoCapitalize='none'
            autoCompleteType='email'
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            mode="outlined"
            style={Style.formInput}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
          <Button
            title="Log in"
            onPress={() => this._authUser()}
            style={ApplicationStyles.button}
          />
        </View>
      </View>
    ); object
  }

  _authUser() {
    const email = this.state.email;
    let emailIsValid = validateEmail(email);
    if (!emailIsValid) {
      showMessage({
        message: 'please enter a valid email',
        type: "info",
      });
      return;
    }

    const password = this.state.password;
    let passwordIsValid = validatePassword(password);
    if (!passwordIsValid) {
      showMessage({
        message: 'please enter your password',
        type: "info",
      });
      return;
    }

    this.props.authUser(email, password)
  }
}

LoginScreen.propTypes = {
  authUser: PropTypes.func,
  authIsLoading: PropTypes.bool,
  authErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  authIsLoading: state.user.authIsLoading,
  authErrorMessage: state.user.authErrorMessage,
})

const mapDispatchToProps = (dispatch) => (
  {
    authUser: (email, pass) => dispatch(UserActions.authUserRequest(email, pass))
  })

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
