import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'



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

  return (
    <View>Seja Bem-Vindo</View>
  )}
  const styles = StyleSheet.create({

  })