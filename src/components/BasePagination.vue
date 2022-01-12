<template>
  <div class="paginator">
    <h4>Total: {{ total }}</h4>
    <nav class="paginator__navigator">
      <BaseButton :disabled="disabledPrev" @click="(_) => navigate(prevPage)" class="paginator__button">
        <base-icon name="left" :color="disabledPrev ? 'white' : '#333'" />
        prev
      </BaseButton>
      <BaseButton :disabled="disabledNext" @click="(_) => navigate(nextPage)" class="paginator__button">
        next
        <base-icon name="right" :color="disabledNext ? 'white' : '#333'" />
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
<style lang="scss">
.paginator__navigator {
  display: flex;
  justify-content: center;
  align-items: center;
}
.paginator__button {
  width: 6em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    justify-content: space-between;
    .base-icon {
      display: initial;
    }
  }
  & > .base-icon {
    display: none;
    transition: display 0.5s linear;
  }
}
</style>