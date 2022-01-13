import { render, fireEvent } from '@testing-library/vue'
import CardCharacter from '@/components/CardCharacter.vue'

const character = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}

function custonRender(options) {
  return  render(CardCharacter, {
      props: {
        character
      },
      global: {
        stubs: ['BaseButton', 'BaseIcon']
      },
      ...options
  })
}

test('Shoul render the name', () => {
  const { getByText } = custonRender() 
  getByText(character.name)
})
test('Shoul render the image', () => {
  const { getByAltText  } = custonRender() 
  const image = getByAltText(character.name)
  expect(image.src).toBe(character.image)
})
test('Shoul render the species', () => {
  const { getByText } = custonRender() 
  getByText(character.species)
})