<template>
    <filter-by-status-vue></filter-by-status-vue>
    <filter-by-name-vue></filter-by-name-vue>
    <paginatior-vue></paginatior-vue>
</template>
<script>
import FilterByStatusVue from "./FilterByStatus.vue"
import FilterByNameVue from "./FilterByName.vue"
import PaginatiorVue from "./Paginatior.vue"
export default {
    components: {
        FilterByStatusVue,
        FilterByNameVue,
        PaginatiorVue
    }
}
</script>