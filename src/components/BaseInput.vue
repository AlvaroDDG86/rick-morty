<template>
  <div class="base-input">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @keyup.enter="(event) => update(event)"
    />
    <span v-show="!!modelValue" class="base-input__clear" @click="_ => clear()">
      <base-icon name="close" />
    </span>
  </div>
</template>
<script>
export default {
    props: {
      modelValue: {
        type: [String, Number],
        require: true
      },
      placeholder: {
        type: String,
        default: ''
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
.base-input {
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