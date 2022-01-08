<template>
  <div class="paginator">
    <h4>Total: {{ total }}</h4>
    <nav class="paginator-navigator">
      <button :disabled="disabledPrev" @click="(_) => navigate(prevPage)">
        prev
      </button>
      <button :disabled="disabledNext" @click="(_) => navigate(nextPage)">
        next
      </button>
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
<style lang="scss">
button {
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 1em;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 0.5em;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }

  &:disabled {
    background-color: gray;
    color: white;
  }
}

</style>