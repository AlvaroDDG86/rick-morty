<template>
    <list-vue>
        <card-episode-vue v-for="episode in episodes" :key="episode.id" :episode="episode">

        </card-episode-vue>
    </list-vue>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ListVue from '../components/ListLayout.vue'
import CardEpisodeVue from '../components/CardEpisode.vue'
export default {
    components: {
        ListVue,
        CardEpisodeVue
    },
    setup() {
        const store = useStore()
        const episodes = computed(() => {
            return store.state.episodes.episodesFilter
        })
        onMounted(() => {
            store.dispatch('episodes/getEpisodes')
        })
        return {
            episodes
        }
    }
}
</script>