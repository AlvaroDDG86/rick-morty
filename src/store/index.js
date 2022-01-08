import { createStore } from 'vuex'
import characters from './modules/characters'
import locations from './modules/locations'

export default createStore({
  modules: {
    characters,
    locations
  }
})
