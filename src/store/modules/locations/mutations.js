import {
  SET_LOCATIONS,
  SET_LOCATIONS_FILTERED,
  SET_LOCATION,
} from "./mutation-types.js";
import { SET_INFO, SET_TEXT } from "../common-mutation-types.js";
export default {
  [SET_LOCATIONS](state, payload) {
    state.locations = payload;
  },
  [SET_LOCATIONS_FILTERED](state, payload) {
    state.locationsFilter = payload;
  },
  [SET_LOCATION](state, payload) {
    state.location = payload;
  },
  [SET_INFO](state, payload) {
    state.info = payload;
  },
  [SET_TEXT](state, payload) {
    state.filter.text = payload;
  }
};
