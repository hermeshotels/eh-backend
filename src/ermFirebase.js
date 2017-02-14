import firebase from 'Firebase'
import localStorage from 'localStorage'
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
  hotelId: null,
  sessionRef: null,
  setup (hotelId) {
    this.hotelId = localStorage.getItem('hotel')
    this.sessionRef = db.ref(`${this.hotelId}/sessions`)
  },
  getSessionChat (sessionId) {
    return db.ref(`${this.hotelId}/sessions/${sessionId}/chat`)
  },
  setChatStatus (status) {
    db.ref(this.hotelId).update({
      chat: status
    })
  },
  getChatStatus (cb) {
    db.ref(this.hotelId).once('value').then((snap) => {
      return cb(snap.val().chat)
    })
  },
  getChatRef (session) {
    return db.ref(`${this.hotelId}/sessions/${session}/chat`)
  },
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
  },
  getAuthStatus (cb) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (!user) {
        return cb(true, null)
      } else {
        return cb(null, true)
      }
    })
  },
  getUserData (user, cb) {
    db.ref('users/' + user.uid).once('value').then((snap) => {
      localStorage.setItem('hotel', snap.val().hotel)
      return cb(null, true)
    }).catch((error) => {
      return cb(error, null)
    })
  },
  setNewRatePrice (sessionId, roomId, rateId, newPrice, rateRef) {
    let count = 0
    let rate = db.ref(`${this.hotelId}/sessions/${sessionId}/rooms/${roomId}/rates/${rateId}`)
    rate.child('prices').once('value').then((snap) => {
      var updates = {}
      snap.forEach((child) => {
        updates[child.key + '/price'] = parseFloat(newPrice)
        count++
      })
      rate.child('prices').update(updates)
      rate.update({
        overrided: true,
        price: parseFloat(newPrice * count)
      })
      rateRef.price = parseFloat(newPrice * count)
    })
  }
}
