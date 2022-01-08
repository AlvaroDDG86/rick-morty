<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      :value="modelValue"
      @input="(event) => update(event)" 
    />
  </div>
</template>
<script>
export default {
    props: {
      modelValue: {
        type: [String, Number],
        require: true
      }
    },
    setup(_, { emit }) {
        function update(event) {
          emit('update:modelValue', event.target.value)
        }
        return {
            update
        }
    }
}
</script>
<style lang="scss">
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  input {
    height: 3em;
    width: 50%;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>