import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { sair } from "../services/auth"



export default function Cadastro() {

  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoMedium: Nunito_500Medium,
    NunitoSemiBold: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
  })
  if (!fontsLoaded) {
    return null
  }
  async function realizarLogout(){
    await sair()
    navigation.navigate('Login')
  }

  return (
    <View style={styles.screen}>
      {/* imagem do fundo */}
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.background}
        resizeMode="cover"

      >
        <View style={styles.container}>
          <Text style={styles.text1}>Seja Bem-Vindo</Text>
        <TouchableOpacity
          style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}
          onPress={realizarLogout}
        >
          <MaterialCommunityIcons name="location-exit" size={27} color="red" />
          <Text style={styles.text2}>Sair</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    marginTop: 400
    
  },
  text1: {
    fontFamily: 'NunitoBold',
    fontSize: 40
  },
  text2: {
    fontFamily: 'Nunito',
    fontSize: 27
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})