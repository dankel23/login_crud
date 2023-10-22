import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/components/Login"
import { Cadastrar } from "./src/components/CadastrarLogin"
import { ListarAlunos } from "./src/components/ListarAlunos"
import { ManterAlunos } from "./src/components/ManterAlunos"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='ListarAlunos' component={ListarAlunos} options={{ title: 'Cadastro de Alunos' }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='ManterAlunos' component={ManterAlunos} options={{ title: 'Cadastrar/Atualizar Alunos' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
