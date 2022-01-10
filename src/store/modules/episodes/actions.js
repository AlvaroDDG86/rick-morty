import api from "@/services/api";
import {
  SET_EPISODES,
  SET_EPISODES_FILTERED,
  SET_EPISODE,
} from "./mutation-types.js";
import { SET_INFO } from "../common-mutation-types.js";
export default {
  async getEpisodes({ commit, state }, page = "") {
    try {
      const response = await api.getEpisodes({
        page: page,
        name: state.filter.text,
      });
      const { data } = response;
      commit(SET_INFO, data.info);
      commit(SET_EPISODES, data.results);
      commit(SET_EPISODES_FILTERED, data.results);
    } catch (error) {
      commit(SET_INFO, {
        count: 0,
        prev: "",
        next: "",
      });
      commit(SET_EPISODES, []);
      commit(SET_EPISODES_FILTERED, []);
    }
  },
  async getEpisode({ commit }, id) {
    try {
      const response = await api.getEpisode(id);
      commit(SET_EPISODE, response.data);
    } catch (error) {}
  },
};
