import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '8px'
        
    },
    containerFundo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E993F',
    },
    title: {
        fontSize: '60px',
        margin: '8px',
        color: 'white',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        width: 300,
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    texto: {
        color: '#fff'
    }
})