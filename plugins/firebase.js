import firebase from 'firebase'
import 'firebase/database'

let config = {
    apiKey: "AIzaSyDLjsUfFbdqlDjAUPWcu2e5gogrMmjdqOE",
    authDomain: "wedsite-8b590.firebaseapp.com",
    databaseURL: "https://wedsite-8b590-default-rtdb.firebaseio.com",
    projectId: "wedsite-8b590",
    storageBucket: "wedsite-8b590.appspot.com",
    messagingSenderId: "1087430729253",
    appId: "1:1087430729253:web:0a9dab643fe8436200a9cc"
}

var app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
} else {
    app = firebase.app(); // if already initialized, use that one
}

let db = app.database()

export { db }