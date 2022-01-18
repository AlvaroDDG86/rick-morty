<template>
  <filters-characters-vue></filters-characters-vue>
  <list-vue data-cy="characters-list">
    <card-character-vue
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
    <div v-if="!characters.length">No results found</div>
  </list-vue>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ListVue from  "../components/ListLayout.vue"
import FiltersCharactersVue from "../components/FiltersCharacters.vue"
import CardCharacterVue from '../components/CardCharacter.vue'
export default {
    components: {
        ListVue,
        FiltersCharactersVue,
        CardCharacterVue
    },
    setup() {
        const store = useStore()
        const characters = computed(() => {
            return store.state.characters.charactersFilter
        })

        onMounted(() => {
            store.dispatch('characters/getCharacters')
        })
        return {
            characters
        }
    }
}
</script>
<style lang="scss">
</style>