<template>
  <span class="base-icon">
    <component :is="renderComponent" :color="color" :size="sizeValue" />
  </span>
</template>

<script>
import { defineAsyncComponent } from "vue";
const SIZES = {'m': '1em', 'l': '2em', 'xl': '4em'}
const ICONS = require.context('./icons',false,/Icon[A-Z]\w+\.(vue|js)$/).keys().reduce((prev, current) => {
  const icon = current.split('/').pop().replace(/\.\w+$/, '')
  const name = icon.slice(4, icon.length + 3).toLowerCase()
  return Object.assign(prev, { [name]: icon })
}, {})

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      require: true,
      validator: function (value) {
        return Object.keys(ICONS).includes(value)
      }
    },
    color: {
      type: String,
      default: '#000'
    },
    size: {
      type: String,
      require: false,
      default: 'm',
      validator: function (value) {
        return Object.keys(SIZES).includes(value)
      }
    }
  },
  computed: {
    sizeValue() {
      return  SIZES[this.size]
    },
    renderComponent() {
      return defineAsyncComponent(() => import(`@/components/icons/${ICONS[this.name.toLowerCase()]}.vue`))
    }
  }
}
</script>