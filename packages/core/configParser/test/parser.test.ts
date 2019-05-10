import { parser } from '../src'

test('can read in components', () => {
  const mockConfig = {
    components: ['@nastauk/graphics-component-lower-third'],
  }

  const expected = {
    client: ['@nastauk/graphics-component-lower-third'],
    admin: ['@nastauk/graphics-component-lower-third'],
  }

  expect(parser(mockConfig)).toEqual(expected)
})
