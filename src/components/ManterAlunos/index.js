import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarAlunos, atualizarAlunos } from "../../servicos/firestore";

export function ManterAlunos({ navigation, route }) {
    const [nomeAluno, setNomeAluno] = useState(route?.params?.nomeAluno)
    const [idadeAluno, setIdadeAluno] = useState(route?.params?.idadeAluno)
    const [turmaAluno, setTurmaAluno] = useState(route?.params?.turmaAluno)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarAluno() {
        if (nomeAluno == '') {
            setStatusErro('Nome')
            setMensagemErro('O campo não pode ser vazio')
        } else if (idadeAluno == '') {
            setStatusErro('idade')
            setMensagemErro('A idade deve ter um valor')
        } else if (turmaAluno == '') {
            setStatusErro('turma')
            setMensagemErro('A turma deve ter um valor')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarAlunos(route?.params?.id, { nomeAluno, idadeAluno, turmaAluno })
            }
            else {
                resultado = await cadastrarAlunos({ nomeAluno, idadeAluno, turmaAluno })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar aluno')
            } else {
                setNomeAluno('')
                setIdadeAluno('')
                setTurmaAluno('')
                navigation.navigate('ListarAlunos') 
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="Nome"
                value={nomeAluno}
                onChangeText={setNomeAluno}
                mode="outlined"
                error={statusErro == 'Nome'}
                style={estilos.input} />
            {statusErro == 'Nome' ? <HelperText type="error" visible={statusErro == 'Nome'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Idade"
                value={idadeAluno}
                keyboardType="numeric"
                onChangeText={setIdadeAluno}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'idade' ? <HelperText type="error" visible={statusErro == 'idade'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Turma"
                value={turmaAluno}
                keyboardType="numeric"
                onChangeText={setTurmaAluno}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'turma' ? <HelperText type="error" visible={statusErro == 'idade'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarAluno()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}