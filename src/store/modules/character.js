import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebaseConfig from '@/firebaseConfig/firebase.config.js'
let config = firebaseConfig
let app = firebase.initializeApp(config)
let db = app.database()
let characterRef = db.ref('characterRoles')
let characterImgRef = firebase.storage().ref()

const state = {
  characters: [],
  uploadProgress: '',
  isUploading: false
}
const actions = {
  async createNewCharacter ({state}, payload) {
    const img = payload.img[0]
    let uploadTask = characterImgRef.child(`character_Imgs/${img.name}`).put(img)
    await uploadTask.on('state_changed', (snapshot) => {
      state.isUploading = true
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      state.uploadProgress = progress
    }, (error) => {
      console.log(error)
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        characterRef.child(payload.name).set({
          img: downloadURL,
          night: payload.night,
          detail: payload.detail,
          weight: payload.weight
        })
      })
      state.isUploading = false
    })
  },
  bindcharacterRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
    bindFirebaseRef('characters', characterRef)
  }),
  unbindcharacterRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
    unbindFirebaseRef('characters')
  })
}

const mutations = {
  ...firebaseMutations
}

const getters = {
  characters: state => state.characters,
  uploadProgress: state => {
    return Math.floor(state.uploadProgress)
  },
  isUploading: state => state.isUploading
}

export default {
  state,
  actions,
  mutations,
  getters
}
