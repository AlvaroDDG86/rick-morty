<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <Button @click="(_) => goHome()"> Go HOME! </Button>
    <img :src="require('@/assets/images/not_found.jpg')" alt="rickandmorty" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function goHome() {
    router.push({ path: '/'})
}
</script>
<style lang="scss" scoped>
.not-found {
  color: chartreuse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    h1 {
        font-size: 4em;
        margin: 0;
    }
    p {
        font-size: 3em;
        margin: 0;
    }
    img {
        border-radius: 50%;
        max-width: 80%;
        height: auto;
    }
}
</style>