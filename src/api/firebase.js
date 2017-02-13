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

export default {
  firebaseApp,
  db,
  register (userData, cb) {
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then((user) => {
      // aggiungo la struttura all'account
      this.db.ref('users/' + user.uid).set({
        'hotel': userData.hotel
      })
      return cb(null, user)
    })
    .catch((error) => {
      return cb(error, null)
    })
  },
  login (user, cb) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        return cb(null, user)
      })
      .catch((error) => {
        return cb(error, null)
      })
  }
}
