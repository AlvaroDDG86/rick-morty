<template>
  <div class="paginator">
    <h4>Total: {{ total }}</h4>
    <nav class="paginator-navigator">
      <Button :disabled="disabledPrev" @click="(_) => navigate(prevPage)">
        prev
      </Button>
      <Button :disabled="disabledNext" @click="(_) => navigate(nextPage)">
        next
      </Button>
    </nav>
  </div>
</template>
<script>
import { computed, toRefs } from 'vue'
export default {
    props: ['nextPage', 'prevPage', 'total'],
    setup(props, { emit }) {
      const { nextPage, prevPage } = toRefs(props)
      const disabledNext = computed(() => nextPage.value === '')
      const disabledPrev = computed(() => prevPage.value === '')
      function navigate(page) {
        emit('navigate', page)
      }
      return {
        navigate,
        disabledNext,
        disabledPrev,
        nextPage,
        prevPage
      }
    }
}
</script>