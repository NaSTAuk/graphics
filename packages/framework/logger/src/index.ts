const log = (value: string) => console.log(value)

const warn = (value: string) => console.warn(value)

const error = (error: string) => console.error(error)

export default {
  error,
  log,
  warn
}