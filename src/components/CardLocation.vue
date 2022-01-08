<template>
    <article class="location">
        <h2 class="location__title">
            {{ location.name }}
        </h2>
        <div class="location__content">
            <div class="location__type">
                <span>Type: </span>{{location.type}}
            </div>
            <div class="location__dimension">
                <span>Dimension: </span>{{location.dimension}}
            </div>
        </div>
    </article>
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
<style lang="scss">
.location {
    margin: 1em;
	height: 160px;
	background-color: white;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    width: 310px;
    color: #333;
    overflow: hidden;

    &__title {
        padding: 1em 0;
    }

    &__type > span, &__dimension > span {
        font-weight: bold;
    }
}
</style>