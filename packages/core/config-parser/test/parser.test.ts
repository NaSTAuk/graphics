import { parser } from '../src'

test('can split components into admin and client', () => {
  const mockConfig = {
    components: ['somePackageName' ],
  }

  const expected = {
    client: ['somePackageName' ],
    admin: ['somePackageName' ],
  }

  expect(parser(mockConfig)).toEqual(expected)
})
