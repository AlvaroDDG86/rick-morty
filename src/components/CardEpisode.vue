<template>
  <div class="episode">
    <h3 class="episode__title">
        {{ episode.name }}
    </h3>
    <p class="episode__content">
        {{ episode.episode }}
        <div class="episode__separator"></div>
        {{ episode.air_date}}
        <BaseButton @click="_ => navigate(episode.id)">
            Show more...
        </BaseButton>
    </p>
  </div>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  props: {
    episode: {
      type: Object,
      require: true
    }
  },
  setup(props) {
      const { episode } = props
      const router = useRouter()
      function navigate(id) {
          router.push({ path: `/episode/${episode.id}` })
      }
      return {
        navigate
      }
  }
}
</script>
<style lang="scss" scoped>
.episode {
    margin: 1em;
    box-sizing: border-box;
    height: fit-content;
    display: flex;
    width: 310px;
    height: 310px;
    transition: 0.6s;
    border: solid 1px chartreuse;
    border-radius: 10px;
    transform: skew(0,0);

    &:hover {
        transform: skew(3deg,6deg);
        box-shadow: 6px 6px 6px rgba(128, 255, 0, 0.438);
        &__title {
            text-shadow: 1px 1px 0px transparent, 3px 3px 0px chartreuse;
        }
    }

    &__title {
        writing-mode: vertical-lr;
        text-orientation: upright;
        background: white;
        color: black;
        padding: 0.5em;
        transition: 0.6s;
        text-shadow: initial;
        border-left: 1em solid chartreuse;
    }

    &__separator {
        width: 100%;
        background: chartreuse;
        height: 1px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
}
</style>