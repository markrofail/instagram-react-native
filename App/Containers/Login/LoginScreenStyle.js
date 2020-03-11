import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      width: "60%",
      height: "20%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    },
    formInput: {
      height:40,
      marginBottom: 5
    },
  });
  