<template>
  <filter-by-status-vue></filter-by-status-vue>
  <base-input v-model="text" placeholder="Character name"></base-input>
  <base-pagination v-bind="confPagination" @navigate="navigate"></base-pagination>
</template>
<script>
import { computed, watch } from 'vue'
import { useStore } from "vuex"
import { usePaginator } from '@/composables/usePaginator.js'
import FilterByStatusVue from "./FilterByStatus.vue"
import {
  SET_TEXT
} from "@/store/modules/common-mutation-types.js";
export default {
    components: {
        FilterByStatusVue
    },
    setup() {
        const store = useStore()
        const text = computed({
          get: () => store.state.characters.filter.text,
          set: (text) => store.commit('characters/' + SET_TEXT, text)
        })
        watch(text, () => store.dispatch('characters/getCharacters'))
        return {
            text,
            navigate: (page) => store.dispatch('characters/getCharacters', page),
            confPagination: usePaginator('characters')
        }
    }
}
</script>