import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    containerFundo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E993F',
        height: '90.2vh'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '10px'
    },
    title: {
        fontSize: '30px',
        margin: '8px',
        color: 'white',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        width: "100%",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
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