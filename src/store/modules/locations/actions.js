import api from '@/services/api'
import {
    SET_LOCATIONS,
    SET_LOCATIONS_FILTERED,
    SET_LOCATION
  } from "./mutation-types.js";
import {
  SET_INFO
} from '../common-mutation-types.js'
export default {
  async getLocations({ commit, state }, page = "") {
    try {
      const response = await api.getLocations({
        page: page,
        name: state.filter.text,
      });
      const { data } = response;
      commit(SET_INFO, data.info);
      commit(SET_LOCATIONS, data.results);
      commit(SET_LOCATIONS_FILTERED, data.results);
    } catch (error) {
      commit(SET_INFO, {
        count: 0,
        prev: "",
        next: "",
      });
      commit(SET_LOCATIONS, []);
      commit(SET_LOCATIONS_FILTERED, []);
    }
  },
  async getLocation({ commit }, id) {
    try {
      const response = await api.getLocation(id);
      commit(SET_LOCATION, response.data);
    } catch (error) {}
  },
};
