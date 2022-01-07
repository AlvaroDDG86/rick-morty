<template>
    <section class="character">
        <pre>{{ character }}</pre>
    </section>
</template>
<script>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { SET_CHARACTER } from '@/store/modules/characters/mutation-types'
export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const store = useStore()
        const character = computed(() => store.state.characters.character)
        onMounted(() => {
            store.dispatch('characters/getCharacter', props.id)
        })
        onUnmounted(() => {
            store.commit('characters/' + SET_CHARACTER, null)
        })
        return {
            character
        }
    }
}
</script>
<style lang="scss">
.character {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>