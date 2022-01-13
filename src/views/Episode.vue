<template>
  <div v-if="episode">
      <h2>
        {{episode.name}}
      </h2>
      <p>
          {{ episode.episode }}
      </p>
      <p>
          {{ episode.air_date }}
      </p>
  </div>
</template>
<script>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { SET_EPISODE } from '@/store/modules/episodes/mutation-types'

export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const store = useStore()
        const episode = computed(() => store.state.episodes.episode)
        onMounted(() => {
            store.dispatch('episodes/getEpisode', props.id)
        })
        onUnmounted(() => {
            store.commit("episodes/" + SET_EPISODE, null)
        })
        return {
            episode
        }
    }
}
</script>