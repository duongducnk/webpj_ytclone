import firebase from 'firebase/app'

import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwsecMGr7lnambn9ARCtWfaEXr95ZxyF4",
  authDomain: "ytclone-a1b2c3.firebaseapp.com",
  projectId: "ytclone-a1b2c3",
  storageBucket: "ytclone-a1b2c3.appspot.com",
  messagingSenderId: "433529754129",
  appId: "1:433529754129:web:46282f1ec52c7977fb57b0",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
