import { logError, logInfo, logWarn } from '@nastauk/graphics-logger'

const log = () => {
  logError('error')
  logInfo('info')
  logWarn('warn')
}

export default log
