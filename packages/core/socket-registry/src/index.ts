import { v4 as uuid } from 'uuid'

class SocketRegistryBase {
  private static availableEndpoints: string[]
  private static endpointMap: { [component: string]: string }
  
  public constructor () {
    SocketRegistryBase.availableEndpoints = []
    SocketRegistryBase.endpointMap = {}
  }
  
  /**
   * Returns true if an endpoint exists.
   * @param id Endpoint Id.
   * @returns true if the endpoint exists.
   */
  public endpointExists (id: string) {
    return SocketRegistryBase.availableEndpoints.indexOf(id) !== -1
  }
  
  /**
   * Adds an endpoint if it doesn't already exist.
   * @param id Endpoint to add.
   * @throws {Error} if endpoint already exists.
   */
  public addEndpoint (id: string) {
    if (!this.endpointExists(id)) {
      SocketRegistryBase.availableEndpoints.push(id)
    } else {
      throw new Error(`Endpoint ${id} is trying to be registered but already exists`)
    }
  }
  
  /**
   * Removes an endpoint if it exists.
   * @param id Endpoint to remove.
   * @throws {Error} if endpoint does not exist.
   */
  public removeEndpoint (id: string) {
    if (this.endpointExists(id)) {
      SocketRegistryBase.availableEndpoints.splice(
        SocketRegistryBase.availableEndpoints.indexOf(id),
        1
      )
    } else {
      throw new Error(`Trying to remove endpoint ${id}, but it doesn't exist`)
    }
  }
  
  /**
   * Generates a unique endpoint Id.
   * @returns Unique endpoint Id.
   */
  public generateEndpoint (): string {
    const id = uuid()
    
    this.addEndpoint(id)
    
    return id
  }

  /**
   * Gives an endpoint to a component.
   * @param componentName Component to add the endpoint to.
   * @returns A unique endpoint Id.
   */
  public assignEndpointToComponent (componentName: string): string {
    const endpoint = this.generateEndpoint()
    
    SocketRegistryBase.endpointMap[componentName] = endpoint
    
    return endpoint
  }
  
  /**
   * Checks if a component has an endpoint assigned.
   * @param componentName Component to assign an endpoint to.
   * @returns Unique endpoint Id.
   */
  public endpointAssignedToComponent (componentName: string): boolean {
    return componentName in SocketRegistryBase.endpointMap
  }
  
  /**
   * Gets the endpoint assigned to a component.
   * @param componentName Component to get endpoint for.
   * @returns Endpoint assigned to component.
   */
  public getEndpointForComponent (componentName: string): string {
    return SocketRegistryBase.endpointMap[componentName]
  }
  
  /**
   * Gets all available endpoints.
   * @returns Array of all available endpoints.
   */
  public getAvailableEndpoints(): string[] {
    return SocketRegistryBase.availableEndpoints
  }
}
  
export const SocketRegistry = new SocketRegistryBase()
  
  