import {
  SET_CHARACTERS,
  SET_CHARACTER_FILTERED,
  SET_CHARACTER,
  SET_INFO,
  SET_TEXT,
  SET_STATUS,
} from "./mutation-types.js";
export default {
  [SET_CHARACTERS](state, payload) {
    state.characters = payload;
  },
  [SET_CHARACTER_FILTERED](state, payload) {
    state.charactersFilter = payload;
  },
  [SET_CHARACTER](state, payload) {
    state.character = payload;
  },
  [SET_INFO](state, payload) {
    state.info = payload;
  },
  [SET_TEXT](state, payload) {
    state.filter.text = payload;
  },
  [SET_STATUS](state, payload) {
    state.filter.status = payload;
  },
};
