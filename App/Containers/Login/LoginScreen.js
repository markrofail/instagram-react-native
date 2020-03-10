import React from 'react'
import { TextInput, Button, View, Image , Text} from 'react-native'
import Style from './LoginScreenStyle'

function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);

  return (
    <View style={Style.container}>
      <View style={Style.form}>
      <Image
        style={Style.logo}
        source={require('App/Assets/Images/instagram_logo.png')}
      />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in"  color="#8134AF" onPress={() => signIn({ username, password })} />
      </View>
    </View>
  );
}

export default LoginScreen;
