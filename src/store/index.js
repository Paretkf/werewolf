import Vue from 'vue'
import Vuex from 'vuex'
import character from './modules/character'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      character
    }
  })
}

export default store
