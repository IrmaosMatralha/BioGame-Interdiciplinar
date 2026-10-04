import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from './TelasLogin/TelaCadastro'
import Login from './TelasLogin/TelaLogin'
import RecuperarSenha from './TelasLogin/TelaRecuperarSenha'
import RecuperarSenha2 from './TelasLogin/TelaRecuperarSenha2'

export default function Route() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Telas Login*/}
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
      />

      <Stack.Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
      />
      <Stack.Screen
        name="RecuperarSenha2"
        component={RecuperarSenha2}
      />
    </Stack.Navigator>
  )
}