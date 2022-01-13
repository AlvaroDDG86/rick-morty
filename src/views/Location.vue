<template>
  <div v-if="location">
    <h2>
      {{ location.name }}
    </h2>
    <p>
      Type: {{ location.type }}
    </p>
    <p>
      Dimension: {{ location.dimension }}
    </p>
  </div>
</template>
<script>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { SET_LOCATION } from '@/store/modules/locations/mutation-types'
export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const store = useStore()
        const location = computed(() => store.state.locations.location)
        const date = computed(() => new Date(store.state.locations.location.created).toLocaleDateString())
        onMounted(() => {
            store.dispatch('locations/getLocation', props.id)
        })
        onUnmounted(() => {
            store.commit('locations/' + SET_LOCATION, null)
        })
        return {
            location,
            date
        }
    }
}
</script>