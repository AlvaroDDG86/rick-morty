<template>
  <filters-characters-vue></filters-characters-vue>
  <list-characters-vue></list-characters-vue>
</template>
<script>
import ListCharactersVue from "../components/ListCharacters.vue"
import FiltersCharactersVue from "../components/FiltersCharacters.vue"
export default {
    components: {
        ListCharactersVue,
        FiltersCharactersVue
    }
}
</script>
<style lang="scss">
</style>