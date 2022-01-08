<template>
    <filter-by-name-vue></filter-by-name-vue>
    <paginatior-vue></paginatior-vue>
</template>
<script>
import FilterByNameVue from "./FilterByName.vue"
import PaginatiorVue from "./Paginatior.vue"
export default {
    components: {
        FilterByNameVue,
        PaginatiorVue
    }
}
</script>