<template>
  <filters-locations-vue></filters-locations-vue>
  <list-vue>
    <card-location-vue
      v-for="location in locations"
      :key="location.id"
      :location="location"
    />
    <div v-if="!locations.length">No results found</div>
  </list-vue>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ListVue from  "../components/List.vue"
import FiltersLocationsVue from "../components/FiltersLocations.vue"
import CardLocationVue from '../components/CardLocation.vue'
export default {
    components: {
        ListVue,
        FiltersLocationsVue,
        CardLocationVue
    },
    setup() {
        const store = useStore()
        const locations = computed(() => {
            return store.state.locations.locationsFilter
        })
        onMounted(() => {
            store.dispatch('locations/getLocations')
        })
        return {
            locations
        }
    }
}
</script>
<style lang="scss">
</style>