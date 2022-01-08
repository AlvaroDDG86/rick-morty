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
        <div class="location__actions">
            <Button>
                Show more...
            </Button>
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
    border-top-left-radius: 10px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.295);
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;

    &:hover  {
        background-color: rgb(219, 219, 219);
        .location__title {
            transform: rotate(360deg) scale(1.2);
            padding: 0 0.3em;
            float: left;
        }
        .location__actions {
            display: block;
        }
    }

    &__title {
        padding: 0.3em 0;
        transition: 0.6s;
    }

    &__type > span, &__dimension > span {
        font-weight: bold;
    }

    &__actions {
        display: none;
    }
}
</style>