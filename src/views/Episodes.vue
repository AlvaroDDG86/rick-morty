<template>
  <filter-episodes></filter-episodes>
  <list-vue>
    <card-episode-vue
      v-for="episode in episodes"
      :key="episode.id"
      :episode="episode"
    />
  </list-vue>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ListVue from '../components/ListLayout.vue'
import CardEpisodeVue from '@/components/CardEpisode.vue'
import FilterEpisodes from '@/components/FilterEpisodes.vue'
export default {
    components: {
    ListVue,
    CardEpisodeVue,
    FilterEpisodes
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