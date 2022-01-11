<template>
  <div class="paginator">
    <h4>Total: {{ total }}</h4>
    <nav class="paginator-navigator">
      <BaseButton :disabled="disabledPrev" @click="(_) => navigate(prevPage)">
        prev
      </BaseButton>
      <BaseButton :disabled="disabledNext" @click="(_) => navigate(nextPage)">
        next
      </BaseButton>
    </nav>
  </div>
</template>
<script>
import { computed, toRefs } from 'vue'
export default {
    props: {
      prevPage: String,
      nextPage: String,
      total: String
    },
    setup(props, { emit }) {
      const { nextPage, prevPage } = toRefs(props)
      return {
        navigate: (page) => emit('navigate', page),
        disabledPrev: computed(() => prevPage.value === ''),
        disabledNext: computed(() => nextPage.value === ''),
        nextPage,
        prevPage
      }
    }
}
</script>