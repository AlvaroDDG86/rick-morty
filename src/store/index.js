import { createStore } from 'vuex'
import characters from './modules/characters'
import locations from './modules/locations'
import episodes from './modules/episodes'

export default createStore({
  modules: {
    characters,
    locations,
    episodes
  }
})
