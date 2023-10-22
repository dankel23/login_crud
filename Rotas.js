import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { Home } from "./src/Componentes/Home"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
