import { render, fireEvent } from '@testing-library/vue'
import CardLocation from '@/components/CardLocation.vue'

const location = {
  "id": 1,
  "name": "Earth",
  "type": "Planet",
  "dimension": "Dimension C-137",
  "residents": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2"
  ],
  "url": "https://rickandmortyapi.com/api/location/1",
  "created": "2017-11-10T12:42:04.162Z"
}

function custonRender(options) {
  return  render(CardLocation, {
      props: {
        location
      },
      global: {
        stubs: ['BaseButton']
      },
      ...options
  })
}

test('Shoul render the name', () => {
  const { getByText } = custonRender() 
  getByText(location.name)
})
test('Shoul render the type', () => {
  const { getByText } = custonRender() 
  getByText(location.type)
})
test('Shoul render the dimension', () => {
  const { getByText } = custonRender() 
  getByText(location.dimension)
})