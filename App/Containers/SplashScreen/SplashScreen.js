import React from 'react'
import { View, Image } from 'react-native';
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter]}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('App/Assets/Images/instagram_logo.png')}
          />
      </View>
    )
  }
}
