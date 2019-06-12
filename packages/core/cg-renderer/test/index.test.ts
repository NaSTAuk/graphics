import render from '../src'

test('should render some string to return', () => {
  expect(render()).toEqual('someRender')
})
