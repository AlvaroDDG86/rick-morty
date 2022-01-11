<template>
    <base-input v-model="text" placeholder="Location name"></base-input>
    <base-pagination v-bind="confPagination" @navigate="navigate"></base-pagination>
</template>
<script>
import { computed, watch, toRefs } from 'vue'
import { useStore } from "vuex"
import { usePaginator } from '../composables/usePaginator';
import {
  SET_TEXT
} from "@/store/modules/common-mutation-types.js";
export default {
    setup() {
        const store = useStore()
        const text = computed({
          get: () => store.state.locations.filter.text,
          set: (text) => store.commit('locations/' + SET_TEXT, text)
        })
        watch(text, () => store.dispatch('locations/getLocations'))
        return {
            text,
            navigate: (page) => store.dispatch('locations/getLocations', page),
            confPagination: usePaginator('locations')
        }
    }
}
</script>