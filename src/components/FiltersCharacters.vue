<template>
  <filter-by-status-vue></filter-by-status-vue>
  <filter-by-name-vue v-model="text"></filter-by-name-vue>
  <paginatior-vue v-bind="confPagination" @navigate="navigate"></paginatior-vue>
</template>
<script>
import { computed, watch } from 'vue'
import { useStore } from "vuex"
import FilterByStatusVue from "./FilterByStatus.vue"
import FilterByNameVue from "./FilterByName.vue"
import PaginatiorVue from "./Paginatior.vue"
import {
  SET_TEXT
} from "@/store/modules/common-mutation-types.js";
export default {
    components: {
        FilterByStatusVue,
        FilterByNameVue,
        PaginatiorVue
    },
    setup() {
        const store = useStore()
        const text = computed({
          get: () => store.state.characters.filter.text,
          set: (text) => store.commit('characters/' + SET_TEXT, text)
        })
        watch(text, () => store.dispatch('characters/getCharacters'))
        const prevPage = computed(() => {
            const prevPage = store.state.characters.info.prev
            if (!prevPage) return ''
            const indexName = prevPage.indexOf('page=')
            const indexCut = prevPage.indexOf('&') === -1 ? prevPage.length : prevPage.indexOf('&')
            return prevPage.substring(indexName, indexCut)
        })
        const nextPage = computed(() => {
          const nextPage = store.state.characters.info.next
          if (!nextPage) return ''
          const indexName = nextPage.indexOf('page=')
          const indexCut = nextPage.indexOf('&') === -1 ? nextPage.length : nextPage.indexOf('&')
          return nextPage.substring(indexName, indexCut)
        })
        const total = computed(() => store.state.characters.info.count)
        const navigate = (page) => {
            store.dispatch('characters/getCharacters', page)
        }
        return {
            text,
            navigate,
            confPagination: {
                prevPage,
                nextPage,
                total
            }
        }
    }
}
</script>