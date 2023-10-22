import { View, FlatList } from "react-native"
import { estilos } from "./estilos"
import { BotaoAluno } from "../BotaoAluno"
import { useEffect, useState } from "react"
import { buscarAlunos, pegarAlunoTempoReal } from "../../servicos/firestore"
import { CardAluno } from "../CardAluno"

export function ListarAlunos({ navigation }) {
    const [alunos, setAlunos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function carregarAlunos() {
        setRefreshing(true)
        const alunosFirestore = await buscarAlunos()
        setAlunos(alunosFirestore)
        setRefreshing(false)
    }
    useEffect(() => {
        carregarAlunos()
        pegarAlunoTempoReal(setAlunos)
    }, [])

    return (
        <View style={estilos.container}>
            {alunos.length > 0 && (<FlatList
                data={alunos}
                renderItem={({ item }) => <CardAluno aluno={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                refreshing={refreshing}
                onRefresh={carregarAlunos}
            />)
            }
            <BotaoAluno onPress={() => navigation.navigate('ManterAlunos')} />
        </View>
    )
}