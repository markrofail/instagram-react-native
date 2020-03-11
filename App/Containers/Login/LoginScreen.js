import React from 'react'
import { Button, View, Image, Text } from 'react-native'
import Style from './LoginScreenStyle'
import { AuthContext } from 'App/Navigators/AuthenticationStack'
import { TextInput } from 'react-native-paper';

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={Style.container}>
      <View style={Style.form}>
        <Image
          style={Style.logo}
          source={require('App/Assets/Images/instagram_text.png')}
        />
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={Style.formInput}
        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={Style.formInput}
        />
        <Button title="Log in" onPress={() => signIn({ email, password })} />
      </View>
    </View>
  );
}

export default LoginScreen;
