interface Config {
  components: string[]
}

const parser = (config: Config) => {
  const admin: string[] = []
  const client: string[] = []

  config.components.forEach((component: string) => {
    client.push(component)
    admin.push(component)
  })

  return {
    admin,
    client,
  }
}

export { parser }
