import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6otOzTjZo621tN0LPbSdamXTGmI0Y03Y",
    authDomain: "whatsapp-clone-7c437.firebaseapp.com",
    projectId: "whatsapp-clone-7c437",
    storageBucket: "whatsapp-clone-7c437.appspot.com",
    messagingSenderId: "625864272083",
    appId: "1:625864272083:web:f4cd16644a96d9f79f8c26",
    measurementId: "G-Z847PWVVM3"
  };

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;