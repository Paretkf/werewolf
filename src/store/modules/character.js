import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebaseConfig from '@/firebaseConfig/firebase.config.js'
let config = firebaseConfig
let app = firebase.initializeApp(config)
let db = app.database()
let characterRef = db.ref('characterRoles')

const state = {
  characters: []
}
const actions = {
  binddriverRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
    bindFirebaseRef('characters', characterRef)
  }),
  unbinddriverRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
    unbindFirebaseRef('characters')
  })
}

const mutations = {
  ...firebaseMutations
}

const getters = {
  characters: state => state.characters
}

export default {
  state,
  actions,
  mutations,
  getters
}
