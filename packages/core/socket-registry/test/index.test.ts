import { SocketRegistry } from '../src/index'

test('Instace', () => {  
  expect(SocketRegistry).toBeTruthy()
})

test('Add Endpoint', () => {
  expect(SocketRegistry.getAvailableEndpoints()).toEqual([])
  SocketRegistry.addEndpoint('foo:bar')
  expect(SocketRegistry.getAvailableEndpoints()).toEqual(['foo:bar'])
  expect(() => { SocketRegistry.addEndpoint('foo:bar') }).toThrowError()
  SocketRegistry.removeEndpoint('foo:bar')
  expect(SocketRegistry.getAvailableEndpoints()).toEqual([])
})

test('Generate Endpoint', () => {
  const newEndpoint: string = SocketRegistry.generateEndpoint()
  
  expect(newEndpoint).toBeTruthy()
  expect(newEndpoint.length).toEqual(36)
})

test('Assign Endpoint to Component', () => {
  const newEndpoint: string = SocketRegistry.assignEndpointToComponent('testComponent')
  
  expect(newEndpoint).toBeTruthy()
  expect(newEndpoint.length).toEqual(36)
  
  const componentEndpoint = SocketRegistry.getEndpointForComponent('testComponent')
  expect(SocketRegistry.endpointAssignedToComponent('testComponent')).toBeTruthy()
  expect(componentEndpoint).toBeTruthy()
})

test('Remove Endpoint That Doesn\'t Exist', () => {
  expect(() => { SocketRegistry.removeEndpoint('This is not real') }).toThrowError()
})