
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24"><path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243a6.001 6.001 0 0 1 .507 7.91a6 6 0 0 0-8.061 8.127l-.69.691l-8.478-8.492a6 6 0 0 1 8.48-8.464a5.998 5.998 0 0 1 8.242.228z" :fill="color"></path></svg>
</template>

<script>
import mixinIcons from './mixinIcons'
export default {
  name: 'IconAlive',
  mixins: [mixinIcons]
}
</script>