import {
    SET_EPISODES,
    SET_EPISODES_FILTERED,
    SET_EPISODE,
  } from "./mutation-types.js";
import { SET_INFO, SET_TEXT } from "../common-mutation-types.js";
export default {
  [SET_EPISODES](state, payload) {
    state.episodes = payload;
  },
  [SET_EPISODES_FILTERED](state, payload) {
    state.episodesFilter = payload;
  },
  [SET_EPISODE](state, payload) {
    state.episode = payload;
  },
  [SET_INFO](state, payload) {
    state.info = payload;
  },
  [SET_TEXT](state, payload) {
    state.filter.text = payload;
  }
};
