import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyA2WwuY7UREfIPZ3ZZ5N4vLvEg2W1zFfqQ',
  authDomain: 'wf3-commerce-69256.firebaseapp.com',
  projectId: 'wf3-commerce-69256',
  storageBucket: 'wf3-commerce-69256.appspot.com',
  messagingSenderId: '709668284143',
  appId: '1:709668284143:web:10b32265eb611fd720dd1a'
})

const auth = firebase.auth()
const db = firebase.firestore()

// AUTHENTIFICATION

const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  try {
    const result = await auth.signInWithPopup(provider)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

const register = async user => {
  try {
    await auth.createUserWithEmailAndPassword(user.email, user.password)
  } catch (error) {
    console.error(error)
  }
}

const login = async user => {
  try {
    await auth.signInWithEmailAndPassword(user.email, user.password)
  } catch (error) {
    console.error(error.message)
  }
}

// DATABASE

const getItems = async () => {
  const list = []
  try {
    const result = await db.collection('items').get()
    result.forEach(doc => list.push(doc.data()))
    return list
  } catch (error) {
    console.error(error.message)
  }
}

export { register, loginWithGoogle, login, auth, getItems }
