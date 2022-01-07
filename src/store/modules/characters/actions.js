import api from '@/services/api'
import {
    SET_CHARACTERS,
    SET_CHARACTER_FILTERED,
    SET_CHARACTER,
    SET_INFO
  } from "./mutation-types.js";
export default {
  async getCharacters({ commit, state }, page = "") {
    try {
      const response = await api.getCharacters({
        page: page,
        status: state.filter.status,
        name: state.filter.text,
      });
      const { data } = response;
      commit(SET_INFO, data.info);
      commit(SET_CHARACTERS, data.results);
      commit(SET_CHARACTER_FILTERED, data.results);
    } catch (error) {
      commit(SET_INFO, {
        count: 0,
        prev: "",
        next: "",
      });
      commit(SET_CHARACTERS, []);
      commit(SET_CHARACTER_FILTERED, []);
    }
  },
  async getCharacter({ commit }, id) {
    try {
      const response = await api.getCharacter(id);
      commit(SET_CHARACTER, response.data);
    } catch (error) {}
  },
};
