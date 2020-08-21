import firebase, { FieldValue } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5i_SVDWBd4cFsr46gt9kvSoa560_j_64",
    authDomain: "whatsup-clone-wojt.firebaseapp.com",
    databaseURL: "https://whatsup-clone-wojt.firebaseio.com",
    projectId: "whatsup-clone-wojt",
    storageBucket: "whatsup-clone-wojt.appspot.com",
    messagingSenderId: "35496982346",
    appId: "1:35496982346:web:75afdc61445f24f23eb3b3",
    measurementId: "G-GN9BTH67GY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, FieldValue }
export default db