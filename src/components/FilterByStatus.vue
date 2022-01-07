<template>
  <div class="filter">
    <div class="filter-list">
      <div
        class="item"
        :class="{ 'selected': item === status}"
        v-for="item in filters"
        :key="item"
        @click="(_) => filter(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex"
import { computed } from '@vue/reactivity'
import { watch } from 'vue'
import {
  SET_STATUS
} from "@/store/modules/characters/mutation-types.js";
export default {
    setup() {
        const store = useStore()
        const filters = ['All', 'Alive', 'Dead', 'unknown']
        const status = computed(() => store.state.characters.filter.status)
        const filter = ((status) => {
          store.commit('characters/' + SET_STATUS, status)
        })
        watch(status, () => store.dispatch('characters/getCharacters'))
        return {
            filter,
            filters,
            status
        }
    }
}
</script>
<style lang="scss">
.filter {
  width: 100%;
  margin: 0 auto;
  .filter-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
    .item {
      padding: 1rem 0.5rem;
      background-color: #222;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      user-select: none;
      &.selected, &:hover {
        font-weight: bold;
        color: chartreuse;
      }
    }
  }
}
</style>
