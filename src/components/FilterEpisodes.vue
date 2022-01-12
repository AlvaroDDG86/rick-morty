<template>
  <base-input v-model="text" placeholder="Episode name"></base-input>
  <base-pagination
    v-bind="confPagination"
    @navigate="navigate"
  ></base-pagination>
</template>
<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { usePaginator } from '../composables/usePaginator'
import {
  SET_TEXT
} from "@/store/modules/common-mutation-types.js";
export default {
    setup() {
        const store = useStore()
        const text = computed({
            get: () => store.state.episodes.filter.text,
            set: (text) => store.commit('episodes/' + SET_TEXT, text)
        })
        watch(text, () => store.dispatch('episodes/getEpisodes'))
        return {
            text,
            navigate: (page) => store.dispatch('episodes/getEpisodes', page),
            confPagination: usePaginator('episodes')
        }
    }
}
</script>