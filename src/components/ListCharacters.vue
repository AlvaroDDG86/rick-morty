<template>
    <section>
        <div class="characters">
            <card-character-vue v-for="character in characters" :key="character.id" :character="character" />
            <div v-if="!characters.length">
                No results found
            </div>
        </div>
    </section>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CardCharacterVue from './CardCharacter.vue'
import PaginatiorVue from './Paginatior.vue'
export default {
    components: {
        CardCharacterVue,
        PaginatiorVue
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
<style scoped>
.characters {
    /* display: grid;
    gap: 1rem;
    grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fill, minmax( min(100%, 25rem), 1fr)); */
    min-height: 100vh;
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
}
</style>