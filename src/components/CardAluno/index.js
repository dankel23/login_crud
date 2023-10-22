import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarAlunos } from "../../servicos/firestore";

export function CardAluno({ aluno, navigation }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{aluno.nomeAluno}</Text>
                    <Text style={estilos.textoAtributos}>Idade: {aluno.idadeAluno}</Text>
                    <Text style={estilos.textoAtributos}>Turma: {aluno.turmaAluno}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('ManterAlunos', aluno)}>
                        <Icon
                            name={'edit'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletarAlunos(aluno.id)} >
                        <Icon
                            name={'delete'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}