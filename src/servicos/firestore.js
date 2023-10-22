import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";

export async function cadastrarAlunos(data) {
    try {
        await addDoc(collection(db, 'Alunos'), data)
        return 'sucesso'
    } catch (error) {
        return 'erro'
    }
}

export async function buscarAlunos() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Alunos'))
        let alunos = []
        querySnapshot.forEach((doc) => {
            let aluno = { id: doc.id, ...doc.data() }
            alunos.push(aluno)
        });
        return alunos
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarAlunos(alunoID, data) {
    try {
        const alunoRef = doc(db, 'Alunos', alunoID)
        await updateDoc(alunoRef, data)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}

export async function deletarAlunos(alunoID) {
    try {
        const alunoRef = doc(db, 'Alunos', alunoID)
        await deleteDoc(alunoRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function pegarAlunoTempoReal(setalunos) {
    const ref = query(collection(db, 'Alunos'))
    onSnapshot(ref, (querySnapshot) => {
        const alunos = []
        querySnapshot.forEach((doc) => {
            alunos.push({ id: doc.id, ...doc.data() })
        })
        setalunos(alunos)
    })
}