<template>
  {{ location }}
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
      require: true
    }
  },
}
</script>