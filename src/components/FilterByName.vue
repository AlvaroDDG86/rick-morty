<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      v-model="text"
    />
  </div>
</template>
<script>
import { computed, watch } from 'vue'
import { useStore } from "vuex"
import {
  SET_TEXT
} from "@/store/modules/characters/mutation-types.js";
export default {
    setup() {
        const store = useStore()
        const text = computed({
          get: () => store.state.characters.filter.text,
          set: (text) => store.commit('characters/' + SET_TEXT, text)
        })
        watch(text, () => store.dispatch('characters/getCharacters'))
        return {
            text
        }
    }
}
</script>
<style lang="scss">
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  input {
    height: 3em;
    width: 50%;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>