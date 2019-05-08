import {logError, logInfo, logWarn} from '../src'

describe('server', () => {
    it('works', () => {
        expect(true).toEqual(true)
    })
})

/* tslint:disable:no-console */
test('should wrap console', () => {
    console.error = jest.fn()
    console.info = jest.fn()
    console.warn = jest.fn()

    logError('error')
    logInfo('info')
    logWarn('warn')

    expect(console.error).toHaveBeenCalledTimes(1)
    expect(console.error).toHaveBeenCalledWith('error')

    expect(console.info).toHaveBeenCalledTimes(1)
    expect(console.info).toHaveBeenCalledWith('info')

    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(console.warn).toHaveBeenCalledWith('warn')
})
/* tslint:disable:no-console */
