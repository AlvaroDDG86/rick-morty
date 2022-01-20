import { mount } from '@vue/test-utils'
import CardCharacter from '@/components/CardCharacter.vue'
import { useRoute } from 'vue-router'
jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => {}
  }))
}))
const STUB = {
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

let wrapper
function custonRender(options) {
  return  mount(CardCharacter, {
      propsData: {
        character: STUB
      },
      global: {
        stubs: ['BaseButton', 'BaseIcon']
      },
      ...options
  })
}

test('Shoul render the name', () => {
  wrapper  = custonRender()
  const name = wrapper.find('[data-testid="name"]')
  expect(name.text()).toBe('Rick Sanchez')
})
test('Shoul render the species', () => {
  wrapper  = custonRender()
  const species = wrapper.find('[data-testid="species"]')
  expect(species.text()).toBe('Human')
})
test('Shoul render the image', () => {
  wrapper  = custonRender()
  const image = wrapper.find('img[alt="Rick Sanchez"]')
  expect(image.attributes().src).toBe('https://rickandmortyapi.com/api/character/avatar/1.jpeg')
})