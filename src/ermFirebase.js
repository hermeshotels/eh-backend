import firebase from 'Firebase'
const config = {
  apiKey: 'AIzaSyAWt_SHgW8lzPrXsXey4vPED8twevhIzmc',
  authDomain: 'ermbol-c7d8f.firebaseapp.com',
  databaseURL: 'https://ermbol-c7d8f.firebaseio.com',
  storageBucket: 'ermbol-c7d8f.appspot.com',
  messagingSenderId: '246835504733'
}
const firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
export default {db, firebaseApp}
