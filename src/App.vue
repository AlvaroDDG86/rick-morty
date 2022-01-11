<template>
  <header-vue></header-vue>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderVue from "./components/TheHeader.vue"
export default {
  name: 'App',
  components: {
    HeaderVue
  }
}
</script>

<style lang="scss">
body {
  all: initial;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #333;
  min-height: 100vh;
  display: grid;
}
.container {
  padding: 1em 0;
  width: #{"min(90%, 1200px)"};
  margin-inline: auto;
}
img.title {
  width: #{"max(40%, 10em)"};
}
</style>

