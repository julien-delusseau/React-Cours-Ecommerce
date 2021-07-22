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

const loginWithGoogle = async history => {
  const provider = new firebase.auth.GoogleAuthProvider()

  try {
    const result = await auth.signInWithPopup(provider)
    const { additionalUserInfo } = result
    const { email, uid } = result.user

    await db.collection('users').doc(uid).set({
      lastname: additionalUserInfo.profile.family_name,
      firstname: additionalUserInfo.profile.given_name,
      id: uid,
      email
    })

    history.push('/')
  } catch (error) {
    console.error(error.message)
  }
}

const register = async user => {
  const { firstname, lastname, email, admin, password } = user
  try {
    await auth.createUserWithEmailAndPassword(email, password)

    await db.collection('users').add({ firstname, lastname, email, admin })
  } catch (error) {
    console.error(error.message)
  }
}

const login = async user => {
  try {
    await auth.signInWithEmailAndPassword(user.email, user.password)
  } catch (error) {
    console.error(error.message)
  }
}

export { register, loginWithGoogle, login, auth, db }
