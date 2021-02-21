import firebase from 'firebase'
import 'firebase/database'
import { config } from '~/plugins/firebase-config.js'

var app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
} else {
    app = firebase.app(); // if already initialized, use that one
}

let db = app.database()

export { db }