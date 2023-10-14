import * as firebaseConfig from './firebase.json'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebase, { credential } from "firebase-admin";
import { UserDocument } from "./documents/UserDocuments";

// Iniciando o app do banco
firebase.initializeApp({ credential: credential.cert(firebaseConfig as firebase.ServiceAccount)})

// Iniciando os serviços
const db = getFirestore()

// collection ref
const colRef = collection(db, 'users')

// pegando os dados da collection
const getDocumentos = getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

export default getDocumentos;