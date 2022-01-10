<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      :value="modelValue"
      @keyup.enter="(event) => update(event)"
    />
    <span v-show="!!modelValue" class="search__clear" @click="_ => clear()">
      X
    </span>
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
    setup(props, { emit }) {
        function update(event) {
          emit('update:modelValue', event.target.value)
        }
        function clear(event) {
          emit('update:modelValue', '')
        }
        return {
            update,
            clear
        }
    }
}
</script>
<style lang="scss" scoped>
.search {
  width: 50%;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  position: relative;
  input {
    width: 100%;
    height: 3em;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
  &__clear {
    position: absolute;
    font-weight: bold;
    margin: auto;
    right: 1em;
    color: black;
    cursor: pointer;
  }
}
</style>