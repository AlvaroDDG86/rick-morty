<template>
 	<div class="card">
		<figure class="card__thumb">
			<img :src="character.image" :alt="character.name" class="card__image">
			<figcaption class="card__caption">
				<h2 class="card__title" data-testid="name">{{character.name}}</h2>
				<p class="card__snippet" data-testid="species"><base-icon :name="character.status" size="xl" :color="color" /> {{ character.species }}</p>
				<BaseButton @click="() => navigate(character.id)" class="card__button">Show more</BaseButton>
			</figcaption>
		</figure>
	</div>
</template>
<script>
import { computed } from "vue"
import { useRouter } from "vue-router"
export default {
  props: {
    character: {
      type: Object,
      require: true
    }
  },
  setup(props) {
	  const router = useRouter()
	  const color = computed(() => props.character.status === 'unknown' ? 'orange' : props.character.status === 'Dead' ? 'red' : 'green')
	  return {
		  navigate: (id) => router.push({ path: `/character/${id}`}),
		  color
	  }
  }
}
</script>
<style lang="scss" scoped>
.card {
	margin: 1em;
	height: 310px;
	background-color: white;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);

	&:hover {
		.card__caption {
			bottom: 0;
		}

		.card__image {
			transform: translateY(-1em) scale(1.1);
		}

		.card__thumb {
			&::after {
				bottom: 0;
			}
		}

		.card__snippet {
			margin: 2em 0;
		}
	}

	&__thumb {
		position: relative;
		height: 100%;
		overflow: hidden;
		margin: 0;
	
		&::after {
			position: absolute;
			bottom: 100%;
			display: block;
			content: '';
			width: 100%;
			height: 100%;
			background: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, rgba(255, 255 ,255 , 0) 100%);
			transition: .3s;
			
		}
	}
	
	&__image {
		transition: .5s ease-in-out;
		height: 100%;
	}
	
	&__caption {
		position: absolute;
		z-index: 1;
		color: white;
		transition: 0.6s;
		text-align: left;
		bottom: 100%;
		padding: 1em;
	}

	&__title {
		display: -webkit-box;
		max-height: 85px;
    	overflow: hidden;
		font-family: 'Playfair Display', serif;
		font-size: 2em;
		line-height: 2em;
		text-shadow: 0px 1px 5px black;
		text-overflow: ellipsis;
    	-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	&__snippet {
		display: -webkit-box;
		max-height: 150px;
		margin: 2em 0;
		overflow: hidden;
		font-family: 'Roboto', sans-serif;
		font-size: 1em;
		line-height: 2em;
		text-overflow: ellipsis;
		transition: .5s ease-in-out;
    	-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}

	&__button {
		display: inline-block;
		padding: 1em 2em;
		color: white;
		border: 1px solid white;
		font-family: 'Roboto', sans-serif;
		font-size: 1em;
		text-transform: uppercase;
		text-decoration: none;
		transition: .3s;
		background: transparent;

		&:hover {
			color: black;
			background-color: white;
		}
	}
}

.disclaimer {
	position: fixed;
	bottom: 0;
	left: 50%;
	z-index: 2;
	box-sizing: border-box;
	width: 100%;
	padding: 2em 1em;
	background-color: white;
	transform: translateX(-50%);
	font-family: 'Roboto', sans-serif;
	font-size: 1em;
	text-align: center;
	
	&__link {
		color: #755D87;
		text-decoration: none;
	}
}
</style>