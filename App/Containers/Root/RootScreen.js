import React, { Component } from 'react'
import { AuthenticationStack } from 'App/Navigators/AuthenticationStack'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
        <AuthenticationStack />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
